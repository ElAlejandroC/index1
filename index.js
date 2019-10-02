const express = require('express');
const app = express();
const pokedex =require('./pokedex.json');
//var arreglo = [];//Arreglo 1
//var persona={}//Arreglo de persona

// P O K E M O N -----------------------******----------------- Practica
app.get("/", (req,res) => {
    console.log("req")
    req.send=("Busqueda pokemon");
});

app.get('/pokedex',(req, res)=>{
    const id = params.id;
    res.json = (pokemon.pokedex);
});
app.get('/pokedex/:id',(req,res)=>{
    var datos =req.params.id;
    res.send(pokedex.pokemon[datos-1]);
});
//app.get("/pokedex/name/:name", (req, res) =>{
//    const filterCombiner = (d, filterArray) => {
//  for (let fn of filterArray) {
//    if (!fn(d)) {
//      return false;
//    }
//  }
//  return true;
//}
//const filterArray1 = []
//  d => d.name === req.params.id,);


  app.get("/pokedex/image/:id", (req, res) =>{
    var dato = req.params.id;
    const img=pokedex.pokemon[dato-1].img;
     res.send("<img src='"+img+"'/>");
    });

    app.get("/pokedex/random", (req, res) =>{
        var rand = Math.floor(Math.random() * 151);
        res.send(pokedex.pokemon[rand]);
        });

// P O K E M O N -----------------------******----------------- Practica
app.listen(3000, () => {
    console.log("La luz llego a casa");

});