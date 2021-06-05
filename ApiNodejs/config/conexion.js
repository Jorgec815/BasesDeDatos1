const mysql = require('mysql');

require('dotenv').config();

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
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