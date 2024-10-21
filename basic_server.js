const http = require("http")

const server = http.createServer((req,res)=>
{
    res.setHeader("Content-Type" , "text/html")
    res.write("<h1>Hello</h1>")
    res.write("Url : "+req.url)
    res.write("Method" + req.method)
    res.end()

})
server.listen(3003,()=>
{
    console.log("listening at port no 3003")
})
