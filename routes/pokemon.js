const pokedex = require('../pokedex.json').pokemon;
const db = require('../config/database')
const express =require('express');
const router= express.Router();

router.get("/", (req, res) => {
    //res.status(200).json(pokedex);
    db.query("SElECT * FROM pokemon").then(rows=>{
        res.status(200);
        res.json(rows);
    }).catch(err =>{
        console.log(err);
        res.status(500);
        res.send("Ocurrio algo mal, F")
    });
});

router.post("", (req, res) => {
    res.json(req.body.x);
});
//SUPEREFEEEEEEEE

router.get("/image/:id", (req, res) => {
    const img = pokedex[req.params.id - 1].img;
    res.send("<img src='" + img + "'>");
});

router.get("/\\brandom\\b", (req, res) => {
    const pokemon = pokedex[Math.floor((Math.random()) * 151)];
    res.json(pokemon);
});

router.get("/:name([A-Za-z]+)", (req, res) => {
    const name = req.params.name;
    const pokemon = pokedex.filter((pokemon) => pokemon.name == name);
    res.json(pokemon);
});

router.get("/:id([0-9]{1,3})", (req, res) => {
    const id = req.params.id;
    res.json(pokedex[id - 1]);
});

module.exports = router;
