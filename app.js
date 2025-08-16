const express = require('express');
const app = express();

// Middleware para archivos estáticos (CSS, imágenes, JS)
app.use(express.static('public'));

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));



app.use('/', require('./router'));

app.listen(5050, ()=>{
    console.log('Se esta ejecutando en el puerto: http://localhost:5050');
});

