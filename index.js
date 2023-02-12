var express = require("express");
var path= require("path");

var app= express();

// Use of static path
var static_path= path.join(__dirname); //declaring folder in which index.html is present
app.use(express.static(static_path));


app.listen(7000,()=>{
    console.log("Server started: http://localhost:7000")
})