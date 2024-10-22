// const http = require("http")
// const server = http.createServer((req,res)=>
// {
   
//     res.write("<h1>Hello</h1>")
//     res.end()

// })
// server.listen(3003,()=>
// {
//     console.log("listening at port no 3003")
// })



const http = require("http")
const fs = require("fs")
let data = "string added"
const server = http.createServer((req,res)=>
{
    let data = fs.readFileSync("data.txt", "utf-8")
    console.log(data)
    res.end()
    // fs.readFile("data.txt","utf-8" , (error,data)=>
    // {
    //     if(error)
    //     {
    //         res.write("not found")
    //         res.end()
    //     }
    //     else
    //     {
    //         res.write(data)
    //         res.end()
    //     }
    // })
    // fs.writeFile("data.txt",data,(err)=>
    // {
    //     if(err)
    //     {
    //         res.write("err")
    //     }
    //     else
    //     {
    //         res.write("aded")
    //     }
    // })
})

server.listen(3300 , ()=>
{
    console.log("listening....")
})




