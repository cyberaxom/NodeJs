var http = require('http');
    fs = require('fs');

function servStaticFiles(res,path,contentType,responseCode){
    if(!responseCode) responseCode=200;
    fs.readFile(__dirname + path, function(err,data){
        if(err) {
                res.writeHead(500, {'content-Type' : 'text/plain'});
                res.end('500 - Internal Error');
        }else{
            res.writeHead(responseCode, {'content-Type': contentType});
            res.end(data);
        }
    });
}



http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path){
        case '':
                servStaticFiles(res, '/public/index.html', 'text/html');
                break;
        case '/about':
                servStaticFiles(res, '/public/about.html', 'text/html');
                break;
        
                
        case '/about':
                servStaticFiles(res, '/public/about.html', 'text/html');
                break;
        case '/contact':
                servStaticFiles(res, '/public/contact.html', 'text/html');
                break;

                default:
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.end("Page Not Found!!");
    }
    
}).listen(3000);

console.log("Please Open the Browser");