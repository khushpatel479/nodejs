// import express from 'express';
// const app = express();
// const PORT = 3000;
// app.listen(PORT, (error) =>{
//     if(!error)
//         console.log("Server is Successfully Running, and App is listening on port "+ PORT)
//     else 
//         console.log("Error occurred, server can't start", error);
//     }
// );
const http = require("http")
const server = http.createServer((req,res)=>
{
    res.write("<h1>hello world</h1>")
    res.end()
})
server.listen(5500,()=>
{
    console.log("serever is running at 5500")
})