/**
 * 
 * Fichier de lancement du serveur express par node.js
 * 
 */

'use strict';

//imports
var express = require('express');
var compression = require('compression');
var github_stats = require('./github_stats');
var public_router = require('./public/public_router');
var config = require("./config");


var stats = github_stats();

//launch express server
var app = express();

//public router
//cache control
var oneYear = 31536000;
//compression en gzip
app.use(compression());
//exposition des resources public
app.use(express.static(__dirname + '/public',{
  maxage: oneYear
}));
//router l'api rest
app.use("/api", stats.router);

var server = app.listen(config.express.port, config.express.ip, function (error) {
	if (error) {
		console.log("Unable to listen for connections", error);
		process.exit(10);
	}
	console.log("express is listening on http://" +
			config.express.ip + ":" + config.express.port);
});