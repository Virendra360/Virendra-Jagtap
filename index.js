var express = require("express");
var path= require("path");
var hbs= require("hbs");  //view engine of handlebars

var PORT= 7000;
var app= express();

// Use of static path
var static_path= path.join(__dirname); //declaring folder in which index.html is present
app.use(express.static(static_path));

// use of template engine handlebars 
var template_path= path.join(__dirname);


app.get('*',(req,res)=>{
    res.send("404 Error");
})

app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`);
})