const express= require("express");
const bodyParser = require("body-parser");
const creartiporespuesta= require("./api/creartiporespuesta");
const user = require("./api/user");
var cors = require('cors');
const app = express(); 
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use("/api/creartiporespuesta",creartiporespuesta);
app.use("/api/user",user);
app.listen(4000, ()=> console.log("Servidor corriendo el localhost:4000"));