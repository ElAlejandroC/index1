const bodyParser = require('body-parser');
const pokedex = require('./pokedex.json').pokemon;
const morgan = require('morgan');
const pokemon = require ('./routes/pokemon.js')
const express = require('express');
const app = express();
const notFoundHandler = require ('./middleware/notFoundHandler')

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/pokemon", pokemon);

app.use(notFoundHandler);

app.listen(3000, () => {
    console.log("La luz llego a casa");
});