const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request,response){
    console.log('requrest recieved')

    if(request.url === '/'){
        fs.readFile('index.html','utf8',(errors,contents)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents)
            response.end()
        })
        
    }
    else if(request.url === '/dojo'){
        fs.readFile('dojo.html','utf8',(errors,contents)=>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents)
            response.end()
        })
    }
    else{
        response.writeHead(404)
        response.end('File Not Found!')
    }
})

server.listen(8000);

