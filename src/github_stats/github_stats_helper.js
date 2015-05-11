/**
 * 
 * bean utilitaire du module github stat
 * 
 */
'use strict';

//imports
var github_language = require('./dao/github_language');

var github_stats_util = function(){

	return {
		parse_github_stats : function(github_stats){
			//sort by language
			github_stats.sort(function(a,b){
				if (a[0] === b[0]) {
					return 0;
				}
				else {
					return (a[0] < b[0]) ? -1 : 1;
				}
			});
			var github_lang;
			var github_langs = [];
			github_stats.forEach(function(github_stat){
				if (github_lang && github_lang.language === github_stat[0]){
					github_lang.add_type(github_stat[1],github_stat[2]);
				}else{
					if (github_stat[0] === "Java" || github_stat[0] === "JavaScript" ||
							github_stat[0] === "C++" || github_stat[0] === "C#"){
						github_lang = new github_language(github_stat[0],github_stat[1],github_stat[2],github_stat[3]);
						github_langs.push(github_lang);
					}
				}
				
			});		
			return github_langs;
		}
	}
};

module.exports = github_stats_util
