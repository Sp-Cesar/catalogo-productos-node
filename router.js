const express = require('express');
const router = express.Router();
const conexion = require('./model/db');
const crud = require('./Controllers/productoController');

const multer = require('multer'); //invocamos multer
const fs = require('node:fs'); //capturar la info de la img

//Designamos el destino 
const upload = multer({dest:'public/img/'});



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

router.get('/create', (req, res)=>{
    res.render('create');
});
function resaveImg(file){
    const newPath =`./public/img/${file.originalname}`;
    fs.renameSync(file.path, newPath);
    return newPath;
}

router.post('/save',upload.single('imgUp'),(req,res)=>{
    resaveImg(req.file)
    crud.save(req,res);
});

module.exports = router;