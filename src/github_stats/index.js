/**
 * Responsable du chargement du module github stats
 * 
 * Expose un service permettant de récupérer les données depuis le front pour afficher un graphique
 * Inject des données issues d'un csv de github analysant l'utilisation des langages sur leurs repos à q4 2014
 * 
 */
'use strict';

// imports
var github_stats_dao = require('./dao/github_csv_dao');

// variables
var dao = github_stats_dao();

// déclaration du module
var github_stats = function() {
	//initialisation de la bdd
	dao.init();
	
	return {};
};

module.exports = github_stats;