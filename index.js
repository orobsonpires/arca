var http = require('http');
var speciesService = require('./lib/species')

http.createServer(function handler(req, res) {

	var _url;

	req.method = req.method.toUpperCase();

	console.log(req.method + ' ' + req.url);

	if (req.method !== 'GET') {
		res.writeHead(501, {
			'Content-Type' : 'text/plain'
		});

		return res.end(req.method + ' is not implemented by this server.')
	}

	if (_url = /^\/species$/.exec(req.url)) {

		speciesService.getSingleSpecies(function(error, data) {

		});

		return res.end('species list');
	} else if (_url = /^\/species\/(\d+)$/i.exec(req.url)) {
		
		var speciesId = _url[1];
		
		speciesService.getSingleSpecies(speciesId, function(error, data) {
			
		});
		
		return res.end('a single species')
	} else {
		res.writeHead(200);
		return res.end('static file maybe')
	}

	res.end('The current time is: ' + Date.now());

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
