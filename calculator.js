// const express= require ("express");
// // We cannot use import here because the  __dirname variable is not available when using ES6 modules (import syntax) in Node.js
// // is importing the "express" module and assigning it to the variable express
// const app= express();

// app.get("/", (req,res)=>{
//     res.sendFile(__dirname+"/index.html");
//     // __dirname is a special variable in Node.js that represents the directory name of the current module file
//     // We cannot use only index.HTML here because when we will host our website on cloud the computer would not know which directory to go to
// });

// app.listen(3000,()=>{
//     console.log("listening on  port 3000");
// });
