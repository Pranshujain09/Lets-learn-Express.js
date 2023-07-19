import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname= dirname(fileURLToPath(import.meta.url));






 const app= express();

 app.use(bodyParser.urlencoded({extended:true}));
 var abc;

 function BandNameGenerator(req, res , next){
    console.log(req.body);
        abc =(`YOUR BAND NAME IS :<br>
         ${req.body["street"]}${req.body["pet"]}`);
       
    
        next();
 }

 app.use(BandNameGenerator);
  
    


// body parser Should be called before any of the rout handlers like get ,post ,listen

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
    
});



app.post("/submit",(req,res)=>{
    res.send(abc);
});

app.listen(3000,()=>{
    console.log("listening on  port 3000");
});
