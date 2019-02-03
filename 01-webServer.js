// core module
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  fs.readFile('./html/hello.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	
	var myUrl = req.url;
	var queryParam = url.parse(req.url, true).query;
    var txt   = "nome="+queryParam.nome + "<br>" + "cognome="+queryParam.cognome;
	
    res.write(data + "<font size=\"2\"><p>"+myUrl+"</p></font>");
	res.write("<font size=\"2\"><p>con i seguenti parametri</p>" + txt + " </font>");
    res.end();
  });
}).listen(8080);