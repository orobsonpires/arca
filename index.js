var http = require('http');
var categoriesService = require('./lib/categories');
var responder = require('./lib/responseGenerator');
require('./lib/connection');

var staticFile = responder.staticFile('/public');

http.createServer(function handler(req, res) {

	var _url;

	req.method = req.method.toUpperCase();

	console.log(req.method + ' ' + req.url);

	if (req.method !== 'GET') {
		res.writeHead(501, {
			'Content-Type': 'text/plain'
		});

		return res.end(req.method + ' is not implemented by this server.')
	}

	if (_url = /^\/species$/.exec(req.url)) {

		categoriesService.getCategories(function (error, data) {
			if (error)
				return responder.send500(error, res);

			if (!data)
				return responder.send404(res);

			return responder.sendJson(data, res);

		});

	} else if (_url = /^\/species\/(\d+)$/i.exec(req.url)) {

		var categoryId = _url[1];

		categoriesService.getCategory(categoryId, function (error, data) {

			if (error)
				return responder.send500(error, res);

			if (!data)
				return responder.send404(res);

			return responder.sendJson(data, res);

		});
	} else {
		res.writeHead(200);
		return staticFile(req.url, res);
	}

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
