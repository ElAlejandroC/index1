const db = require('../config/database');
const express = require('express');
const pokemon = express.Router();

pokemon.get("/", (req, res) => {
    db.query("SELECT * FROM pokemon").then(rows => {
        res.status(200);
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Ocurrió algo mal");
    });
});

pokemon.post("/", (req, res) => {
    query = "INSERT INTO pokemon (pok_name, pok_height, pok_weight, pok_base_experience) ";
    query += `VALUES ('${req.body.pok_name}', ${req.body.pok_height}, ${req.body.pok_weight}, ${req.body.pok_base_experience})`;
    db.query(query).then(rows => {
        if (rows.affectedRows > 0) {
            res.status(201);
            res.send("Pokemon añadido con éxito");
        }
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Ocurrió un error al añadir el pokemon");
    });
});
pokemon.delete("/:id([0-9]{1,3})", (req, res) => {
    query = `DELETE FROM pokemon WHERE pok_id=' $(req.params.id)'`;
    db.query(query).then(rows => {
        res.status(204);
        res.send("Pokemon eliminado Correctamente UwU");
    }).catch(err => {
        console.log(err)
        res.status(500);
        res.send("Ocurrió algo mal");
    })
});

pokemon.put("/:id([0-9]{1,3})", (req, res) => {
    const columns = Object.keys(req.body);
    const values = Object.values(req.body);
    query = "UPDATE pokemon SET ";
    for (let i = 0; i < columns.length; i++) {
        query += `${columns[i]} = `;
        query += isNaN(values[i]) ? `'${values[i]}'` : `${values[i]}`;
        query += (i + 1 < columns.length) ? ", " : " ";
    }
    query += `WHERE pok_id=${req.params.id}`;
    res.send(query);
});

pokemon.get("/\\brandom\\b", (req, res) => {
    const id = Math.floor((Math.random()) * 722);
    const query = `SELECT * FROM pokemon WHERE pok_id='${id}'`;
    db.query(query).then(rows => {
        res.status(200);
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Ocurrió algo mal");
    });
});

pokemon.get("/:name([A-Za-z]+)", (req, res) => {
    const name = req.params.name;
    const query = `SELECT * FROM pokemon WHERE pok_name='${name}'`;
    db.query(query).then(rows => {
        if (rows.length > 0) {
            res.status(200);
            res.json(rows);
        }
        res.status(404);
        res.send("No se encontró al pokemon");
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Ocurrió algo mal");
    });
});


pokemon.get("/:id([0-9]{1,3})", (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM pokemon WHERE pok_id=${id}`;
    db.query(query).then(rows => {
        if (rows.length > 0) {
            res.status(200);
            res.json(rows);
        }
        res.status(404);
        res.send("No se encontró al pokemon");
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Ocurrió algo mal");
    });
});

module.exports = pokemon;