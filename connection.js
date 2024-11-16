const express = require("express")
const body = require("body-parser")
const app = express()
const port = 3300
const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/khush",{}
// ).then(()=>
// {
//     console.log("connected")
// }).catch((Error)=>
// {
//     console.log(Error)
// })
// mongoose.connect("mongodb+srv://test:admin@cluster0.yi4kr.mongodb.net/khush?retryWrites=true&w=majority&appName=Cluster0",{})
mongoose.connect("mongodb://localhost:27017/iant",{})
.then(()=>
{
    console.log("connected")
}).catch((Error)=>
{
    console.log(Error)
})

var stud = require("./stud");
var studData = require("./stddata");

app.post("/insert", (req, res) => {
  console.log(studData.student);
  const result = stud.insertMany(studData.student);
  res.send(result);
})

app.put("update/:sno",(req,res)=>
{
    let upd = req.body
    console.log(upd , "-",req.body.fees)
    stud.findOneAndUpdate({sno : req.params.sno} , upd,{"fees":req.body.fees})
    
})
app.get("/getdata",(req,res)=>
{
    console.log("get all")
    stud.find({}).then((data)=>
    {
        console.log(stud)
        res.json(data)
    }).catch((Error)=>
    {
        res.send(Error)
    })
})
app.listen(port,()=>
{
    console.log("localhost:3300")
})