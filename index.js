var express = require('express');
var app = express();

app.get("/", (req,res) => {
    console.log("Server is running...");
})
app.listen(3000, () => {
    console.log("Server is running...");
})
