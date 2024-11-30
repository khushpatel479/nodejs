let express = require("express")
let app = express()
let bodyparser = require("body-parser")
app.use(bodyparser.json())

let port = 3090
let module1 = require("./insert")
let module2 = require("./update")
let module3 = require("./dis")
app.use("/insert",module1)
app.use("/update",module2)
app.use("/display",module3)
app.listen(port,()=>
{
    console.log("localhost:3090")
})

