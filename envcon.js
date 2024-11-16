const express = require("express")
require("dotenv/config")
const app = express()
const port = 3090
const mn = require("mongoose")
mn.connect(process.env.CONNECTION_STRING,{
    dbName:"iant"
}).then(()=>
{
    console.log("connected")
}).catch((Error)=>
{
    console.log(Error)
})

app.listen(3090,()=>
{
    console.log("localhost:3090")
})