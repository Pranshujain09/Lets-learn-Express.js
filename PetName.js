
// ##### COMMON JS SYNTAX  #####

// const express= require ("express");
// const bodyParser= require("body-parser");

// const app= express();

// app.use(bodyParser.urlencoded({extended:true}));
// // body parser Should be called before any of the rout handlers like get ,post ,listen

// app.get("/", (req,res)=>{
//     res.sendFile(__dirname+"/index.html");
    
// });



// app.post("/submit",(req,res)=>{
//     console.log(req.body);
// })

// app.listen(3000,()=>{
//     console.log("listening on  port 3000");
// });






// ###### ES SYNTAX ######


import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname= dirname(fileURLToPath(import.meta.url));






 const app= express();

app.use(bodyParser.urlencoded({extended:true}));
// body parser Should be called before any of the rout handlers like get ,post ,listen

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
    
});



app.post("/submit",(req,res)=>{
    console.log(req.body);
})

app.listen(3000,()=>{
    console.log("listening on  port 3000");
});



