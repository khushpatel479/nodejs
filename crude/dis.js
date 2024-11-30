const express = require("express")
const app = express()
var std = require("./std1")
var data  = require("./data")

const module3 = express.Router()
module3.get("/",(req,res)=>
{
    std.find({}).then((da)=>
{
    res.json(da)
})
})

module.exports = module3