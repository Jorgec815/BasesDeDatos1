require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//instancia de express
const app = express();

//admisión de datos

app.use(express.json());

//config
app.set('port', port);


//rutas

app.use("/api",require("./rutas"));

//iniciar express

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log("Ha ocurrido un error al iniciar el servidor:" + error)
    }else{
        console.log("Servidor iniciado en el puerto: " + port)
    }
})