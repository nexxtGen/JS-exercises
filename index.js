

var fs = require('fs');// fs to moduł Node do pracy z plikami.
var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
                fs.readFile('./index.html', 'utf-8', function(err, data) {
                response.write(data);  
                response.end();              
            });            
    } else {
            response.statusCode = 404;
            fs.readFile('404.jpg', function(err, data) {
                if (err) throw err; // 
                    response.write('<html><body><img src="data:image/jpeg;base64,')
                    response.write(Buffer.from(data).toString('base64')); //zmienia odczyt pliku na string
                    response.end('"/></body></html>');
            });
    }
});
server.listen(9000);

/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nZapis drugi', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/
/*
var path1 = './'
fs.readdir(path1, function(err, files){ 
    if (err) throw err;   
    console.log('Pliki:', files);
    fs.writeFile('./YourFiles.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano dane!'.red);
        fs.readFile('./YourFiles.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie:'.red)
            console.log(data);
        });
    })
});
*/
