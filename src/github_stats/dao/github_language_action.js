/**
 * 
 * bean contenant les info d'une action github (fork, push...) et le nombre de repos lié à cette action
 * 
 */
'use strict';

var github_language_action = function(type,active_repos){

	this.type = type;
	this.nb_repos = active_repos;

	return this;
};

module.exports = github_language_action;