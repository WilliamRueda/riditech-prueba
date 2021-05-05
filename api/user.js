const db= require('../models');
const express= require('express');
const router = express.Router();

router.post('/newUser', (req, res)=>{
 let name =req.body.name;
 let email = req.body.email;
 let password = req.body.password;
 let edad = req.body.edad;
 let estado =  req.body.estado;
try {
    db.User.create({
        name,
        email,
        password,
        edad,
        estado,
        
        
        });
        res.status(200).send('Usuario creado'); 
} catch (error) {
   res.status(400).send("error");
   console.log(res); 
}


});

router.get('/listUser', async (req, res)=>{
    try {
        let users= await db.User.findAll();  
        res.status(200).send(users);
        
    } catch (error) {
          res.status(400).send('No se pudieron obtener los usuario');

        
    }
});

 router.get("/finby/:email", async(req,res)=>{
    try {
       
        let email= req.params.email;
        let user= await db.User.findAll({
            where:{
              email:email
            }
          }
        )
          .then(user => {
            return user;
          })
          .catch(err => {
            console.log(err)
          })
        res.status(200).send(user);
        console.log(user);
    } catch (error) {
        console.log(error);
          res.status(400).send('No se pudieron obtener los usuario');

        
    }


}); 

router.post('/update', async (req,res )=>{
try {
    let ide= req.body.ide;
    let name= req.body.name;
    let password= req.body.password;
    let email= req.body.email;
    let edad= req.body.edad;
    console.log(ide);
    console.log(name);
    let user= await db.User.findByPk(ide);
    await user.update({
         name:name,
         email:email,
         password:password,
         edad:edad
    }, {
    where: {
        ide:user.ide,
    }


    });
    res.status(200).send(user); 
} catch (error) {
    res.status(400).send('No se pudieron obtener los usuario');
    res.status(400).send(user);
  
}
});

router.post('/delete/:id', async (req,res )=>{
    try {
        let ide= req.params.id;
        let name= req.body.name;
        let user= await db.User.findByPk(ide);
        await user.destroy({
             
        where: {
            ide:user.ide,
        }
    
    
        });
        res.status(200).send('El usuarui con la id:' + ide + "Se ha eliminado"); 
    } catch (error) {
        res.status(400).send('No se pudieron obtener los usuario');
        res.status(400).send(user);
      
    }
    });




module.exports= router;