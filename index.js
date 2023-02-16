var express = require("express");
var path= require("path");
var hbs= require("hbs");  //view engine of handlebars

var PORT= 7000;
var app= express();

// Use of static path
var static_path= path.join(__dirname); //declaring folder in which index.html is present
app.use(express.static(static_path));

// use of template engine handlebars 
var template_path= path.join(__dirname+"/views");
app.set("view engine","hbs");
app.set("views",template_path);

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("*",(req,res)=>{
    res.render('404error')
})

app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`);
})