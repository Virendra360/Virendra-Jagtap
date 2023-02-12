var express = require("express");
var path= require("path");

var PORT= 7000;

var app= express();

// Use of static path
var static_path= path.join(__dirname); //declaring folder in which index.html is present
app.use(express.static(static_path));



app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`);
})