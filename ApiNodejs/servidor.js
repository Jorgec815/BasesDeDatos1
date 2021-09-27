var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
var bodyparser = require('body-parser');
var oracledb = require('oracledb');
var mailOptions;

//Authoriser tous les requettes cors)
var cors = require('cors');
app.use(cors());

app.use(bodyparser.json());

///Pour changer le format de la requete 
app.use(bodyparser.urlencoded({
    extended: true
}));
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jorgecortes815@gmail.com',
        pass: 'oyrvmzkdarcggmmw'
    }
});


var connAttrs = {
    "user": "system",
    "password": "0815",
    "connectString": "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))"
}

/////Consultar usuarios
app.get('/cliente', function (req, res) {
    "use strict";

    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("SELECT * FROM cliente", {}, {
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the dba_tablespaces",
                    detailed_message: err.message
                }));
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                res.contentType('application/json').status(200);
                res.send(JSON.stringify(result.rows));

            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /sendTablespace : Connection released");
                    }
                });
        });
    });
});

app.get('/cliente/:id', function (req, res) {
    "use strict";

    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("SELECT * FROM cliente WHERE id = :idv", { idv: req.params.id }, {
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the dba_tablespaces",
                    detailed_message: err.message
                }));
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                res.contentType('application/json').status(200);
                res.send(JSON.stringify(result.rows));

            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /sendTablespace : Connection released");
                    }
                });
        });
    });
});

/////Supprimer un Utilisateur (node.js)////// done
app.delete('/eliminar_cliente/:id', function (req, res, next) {

    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("DELETE FROM cliente WHERE id= :idv", { idv: req.params.id }, {
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                res.contentType('application/json').status(200);
                res.send(JSON.stringify(err.message));

            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                res.contentType('application/json').status(200);
                res.send(JSON.stringify("1"));

            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("POST /sendTablespace : Connection released");
                    }
                });
        });
    });
});

app.post('/cliente', function (req, res, next) {
    var nombre = req.body.nombre
    var apellido = req.body.apellido
    var correo = req.body.correo
    var fechaNacimiento = req.body.fechaNacimiento
    var codigo

    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        connection.execute("INSERT INTO cliente (NOMBRE, APELLIDO, FECHA, CORREO) VALUES (:nombrev, :apellidov, :fechav, :correov) RETURNING ID into :idv",
            { nombrev: { val: nombre, type: oracledb.DB_TYPE_VARCHAR }, apellidov: { val: apellido, type: oracledb.DB_TYPE_VARCHAR }, fechav: { val: fechaNacimiento, type: oracledb.DB_TYPE_VARCHAR }, correov: { val: correo, type: oracledb.DB_TYPE_VARCHAR }, idv: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT } }, { autoCommit: true }
            , function (err, result) {
                if (err) {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Headers', 'Content-Type');
                    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                    res.contentType('application/json').status(200);
                    res.send(JSON.stringify(err.message));
                } else {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Headers', 'Content-Type');
                    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                    res.contentType('application/json').status(200);
                    res.send(JSON.stringify(result.outBinds.idv));
                    codigo = result.outBinds.idv[0]

                    crearDestinatario(correo, nombre, apellido, codigo)

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email enviado: ' + info.response);
                        }
                    });
                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /sendTablespace : Connection released");
                        }
                    });
            });
    });
});


app.put('/cliente/:id', function (req, res, next) {
    var pass = req.body.passv
    var user = req.body.usuario

    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        connection.execute("UPDATE cliente SET pass = :passv, usuario = :userv WHERE id = :idv",
            { idv: req.params.id, passv: { val: pass, type: oracledb.DB_TYPE_VARCHAR }, userv:{val: user, type:oracledb.DB_TYPE_VARCHAR}}, { autoCommit: true }
            , function (err, result) {
                if (err) {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Headers', 'Content-Type');
                    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                    res.contentType('application/json').status(200);
                    res.send(JSON.stringify(err.message));
                } else {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Headers', 'Content-Type');
                    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                    res.contentType('application/json').status(200);
                    res.send(JSON.stringify(result.rows));
                }
                // Release the connection
                connection.release(
                    function (err) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            console.log("POST /sendTablespace : Connection released");
                        }
                    });
            });
    });

});

app.listen(3000, function () {
    console.log("Live at Port 3000");
});

function crearDestinatario(correo, nombre, apellido, codigo) {

    mailOptions = {
        from: 'jorgecortes815@gmail.com',
        to: correo,
        subject: 'Bienvenido!',
        text: "Hola " + nombre + " " + apellido + "! Por favor ingresa al siguiente link para crear tu contraseña: http://localhost:4200/bienvenida/" + codigo
    };
}