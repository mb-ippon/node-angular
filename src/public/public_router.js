/**
 * Router du module github_stats
 * 
 * redirige les requêtes d'express vers les services github_stats
 * 
 */
'use strict';

//imports
var router = require("express").Router();

router.get("/", function(req, res){
	res.sendFile(__dirname + '/index.html');
});

module.exports = router;