/**
 * 
 * Spec pour le bean github_language
 * 
 */
'use strict';

//imports
var github_language = require('../src/github_stats/dao/github_language');

describe("vérification du bean github_language", function () {
	
	it("instancie correctment le bean", function () {
		var github_lang = new github_language('js','push',4);
		expect(github_lang.language).toBe('js');
		expect(github_lang.types[0].type).toBe('push');
		expect(github_lang.types[0].nb_repos).toBe(4);
	});
	
	it("ajout correctment un type à un bean existant", function () {
		var github_lang = new github_language('js','push',4);
		github_lang.add_type('fork', 8);
		expect(github_lang.types.length).toBe(2);
		expect(github_lang.types[1].type).toBe('fork');
		expect(github_lang.types[1].nb_repos).toBe(8);
	});
});    