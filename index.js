const express = require('express');
const app = express();
var arreglo = [];//Arreglo 1
var persona={}//Arreglo de persona

app.get("/", (req,res) => {
    res.send("Chale");
});

app.get("/:id/:Edad/:Nombre",(req , res) =>{
    if (req.url!= "/favicon.ico"){
    var dato = req.params.id;
    var dato1 = req.params.Edad;
    var dato2 = req.params.Nombre;
    console.log(dato);
    console.log(dato1);
    console.log(dato2);

    arreglo.push(dato);
    persona.Edad = dato1
    persona.Nombre=dato2;

    res.send(dato);

    console.log(arreglo);
    console.log(persona);
}
});



app.listen(3000, () => {
    console.log("Server is running...");

});