const http = require('http');
const fs = require("fs");
const server = http.createServer((request , respons) => {
    respons.setHeader("content-Type" , "text/html");
    fs.readFile("./allData/index.html" , (err , file) => {
        if (err) {
            respons.end("reult not found")
        }else{
            respons.end(file)
        }
    })
    console.log("server is curruntly running")
});

server.listen(8000 , "localhost" , () => {
    console.log("listining server");
})