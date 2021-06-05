const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'cuadrangulares_db'
})

conexion.connect((err)=>{
    if(err){
        console.log("Ha ocurrido un error al conectar la base de datos: " + err);
    }else{
        console.log("Se ha conectado la base de datos");
    }
})

module.exports = conexion;