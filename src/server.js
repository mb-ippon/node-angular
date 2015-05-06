/**
 * 
 * Fichier de lancement du serveur express par node.js
 * 
 */

'use strict';

//imports
var express = require('express');
var github_stats = require('./github_stats');
var stats = github_stats();

//launch express server
var app = express();

//router l'api rest
app.use("/api", stats.router);

var server = app.listen(3000, function () {

	console.log('express server listening at http://%s:%s', server.address().address, server.address().port);

});