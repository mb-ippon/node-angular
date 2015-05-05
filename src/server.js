'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var server = app.listen(3000, function () {

	console.log('express server listening at http://%s:%s', server.address().address, server.address().port);

});