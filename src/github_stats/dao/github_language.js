/**
 * 
 * bean contenant les info d'un langage issus des stats de github
 * 
 */
'use strict';
// import
var github_language_action = require('./github_language_action');

var github_language = function(language,type,active_repos){

	this.language = language;
	this.types = [new github_language_action(type,active_repos)];

	this.add_type = function(type, nb_repos){
		this.types.push(new github_language_action(type,nb_repos));
	}

	return this;
};

module.exports = github_language;