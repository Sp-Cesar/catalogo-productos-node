const mysql = require('mysql');
const router = require('../router');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdproductos'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Se conecto exitosamente a la BD MySQL!!!!');
});

module.exports = conexion;