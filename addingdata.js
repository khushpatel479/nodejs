// const http = require("http")
// const fs = require("fs")
// const { json } = require("body-parser")
// let data = [{name1 : "khush" , id : 101 },{name2 : "abs",id:102}]
// const server = http.createServer((req,res)=>
// {
//     // fs.appendFile("data1.txt" , "hello1" , (err)=>
//     // {
//     //     if(err)
//     //     {
//     //         res.write("not added")
//     //         res.end()
//     //     }
//     //     else
//     //     {
//     //         res.write("added")
//     //         res.end()
//     //     }
//     // })

//     fs.appendFileSync("data1.txt" , JSON.stringify(data))
//     res.end()
// })

// server.listen(3300 , ()=>
// {
//     console.log("localhost:3300")
// })

//unlink file

const fs = require("fs")
const http = require("http")
const server = http.createServer((req,res)=>
{
    // fs.unlink("data1.js" , (err)=>
    // {
    //     if(err)
    //     {
    //         res.write("err")
    //         res.end()
    //     }
    //     else
    //     {
    //         res.write("success")
    //     }
    // })
    fs.rename("data1.txt","data1.js",(err)=>
    {
        if(err)
        {
        res.write("err")
            res.end()
    }
        else
        {
            res.write("ok")
            res.end()
        }
    })

    res.end()
})

server.listen(3300,()=>
{
    console.log("localhost:3300")
})