const conexion = require('../model/db')



exports.save =  (req, res) =>{

    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const descripcion = req.body.descripcion;
    const catalogo = req.body.catalogo;
    const precio = req.body.precio;
    conexion.query('INSERT INTO productos SET ?',{
        titulo:titulo,
        autor:autor,
        descripcion:descripcion,
        catalogo:catalogo,
        precio:precio,
        img: req.file.originalname
    },(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};