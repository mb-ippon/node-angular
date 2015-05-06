/**
 * 
 * dao chargeant les données de github depuis un csv q4-2014.csv
 * 
 */
'use strict';
//imports
var csv = require('csv');
var fs = require('fs');

//déclaration du module
var github_stats_dao = function(){

	var parser = csv.parse({delimiter: ','}, function(err, data){
		console.log(data);
	});

	return {
		init : function(){
			fs.createReadStream(__dirname+'/q4-2014.csv').pipe(parser);
		}
	};
};

module.exports = github_stats_dao;




