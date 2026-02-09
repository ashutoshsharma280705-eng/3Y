const http = require('http');
const fs = require('fs');
const port = 1400;

const server = http.createServer((req,res)=>{
    if(req.url=='/about'){
        fs.readFile('file2.txt','utf8',(err,data)=>{
            if(err){
                res.statusCode=505;
                return;
            }
            res.statusCode=200;
            res.end(data);
        })
    }
    else if(req.url=='/content'){
        fs.readFile('file1.txt','utf8',(err,data)=>{
            if(err){
                res.statusCode=404;
                return;
            }
            res.statusCode=200;
            res.end(data);
        })
    }
    else if(req.url=='/html '){
        fs.readFile('index.html','utf8',(err,data)=>{
            if(err){
                res.statusCode=404;
                return;
            }
            res.statusCode=200;
            res.end(data);
        })
    }
    else{
        res.statusCode=404;
        res.end("sorry page not find babu!!!!!!!!!!!!");
    }
   
})

server.listen(port,()=>{
    console.log("server run on port " ,port);
})