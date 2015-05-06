/**
 * 
 * dao chargeant les données de github depuis un csv q4-2014.csv
 * 
 */
'use strict';
//imports
var csv = require('csv');
var fs = require('fs');
var github_util = require('../github_stats_helper');

//variables
var util = github_util();

//déclaration du module
var github_stats_dao = function(){
	
	var github_stats;
	
	var parser = csv.parse({delimiter: ','}, function(err, data){
		github_stats = util.parse_github_stats(data);
	});

	return {
		init : function(){
			fs.createReadStream(__dirname+'/q4-2014.csv').pipe(parser);
		},
		find_all : function(){
			return github_stats; 
		}
	};
};

module.exports = github_stats_dao();




