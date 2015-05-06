/**
 * Router du module github_stats
 * 
 * redirige les requêtes d'express vers les services github_stats
 * 
 */
'use strict';

//imports
var router = require("express").Router();
var github_stats_dao = require('./dao/github_csv_dao');

router.get("/github-stats", function(req, res){
	res.json(github_stats_dao.find_all());
});

module.exports = router;