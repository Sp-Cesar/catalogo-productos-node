const express = require('express');
const router = express.Router();
const conexion = require('./model/db');

router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM productos', (error,result)=>{
        if(error){
            throw error;
        }else{
            res.render('products', {resultado:result})
        }
    })
});

router.get('/detalle/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM productos WHERE id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('detalle', {producto:results[0]});
        }
    })
})

module.exports = router;