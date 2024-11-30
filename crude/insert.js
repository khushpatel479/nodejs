let express = require("express")
let module1 = express.Router()
let mongoose = require("mongoose")
var std1 = require("./std1")
var data = require("./data")
mongoose.connect("mongodb://localhost:27017/iant",{}).then(()=>
{
    console.log("ok")
}).catch((Error)=>
{
    console.log(Error)
})

module1.post("/",(req,res)=>
{
    console.log(data.student)
    let lp=std1.insertMany(data.student)
    res.send(lp)
    // std1.find({}).then((data)=>
    // {
    //     res.json(data)
    // }).catch((Error)=>
    // {
    //     console.log(Error)
    // })
})
module.exports = module1