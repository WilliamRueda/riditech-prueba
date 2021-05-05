const db= require('../models');
const express= require('express');
const router = express.Router();

router.get("/", (req ,res)=> {
    res.send("hola");



});

router.post("/new", (req, res)=>{
let Tipo=req.body.Tipo;
try {
    db.TipoRespuesta.create({
        Tipo,        
        });

        res.status(200).send('Tipo respuesta Creada');
} catch (error) {
    res.status(400).send('No se puede crear el tipo');
    console.log(error);
  
}

})



module.exports= router;
