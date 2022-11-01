const http = require('http'); //Http Modul
const port = 8080; //Port

//Server Erzeugung
const server = http.createServer(function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write("<h1>Hello World!</h1><p>Karma Khamritshang</p>");  //Html Code
    res.end();
});

server.listen(port, () => {
    console.log('Server is available under http://127.0.0.1:' + port + '/'); //CLI Text
});