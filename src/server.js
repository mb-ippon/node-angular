/**
 * 
 * Fichier de lancement du serveur express par node.js
 * 
 */

'use strict';

//imports
var express = require('express');
var github_stats = require('./github_stats');

//launch express server
var app = express();
// lance module github stats permettant d'obtenir des stats sur les langages des repos github de q4 2014
var stats = github_stats();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var server = app.listen(3000, function () {

	console.log('express server listening at http://%s:%s', server.address().address, server.address().port);

});