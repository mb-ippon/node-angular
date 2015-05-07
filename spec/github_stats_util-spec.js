/**
 * 
 * Spec pour le bean util github_stats_util
 * 
 */
'use strict';

//imports
var github_stats_helper = require('../src/github_stats/github_stats_helper');

describe("vérification du bean util github_stats_util", function () {
	
	it("parse a bi-dimensionnal array into an array of github_lang", function () {
		var bi_dim_array = [['js','push', 4],['java', 'push', 2],['js','fork',4]];
		var helper = github_stats_helper();
		var github_stats = helper.parse_github_stats(bi_dim_array);
		expect(github_stats.length).toBe(2);
		expect(github_stats[0].language).toBe('java');
		expect(github_stats[0].types.length).toBe(1);
		expect(github_stats[1].language).toBe('js');
		expect(github_stats[1].types.length).toBe(2);
	});
	
});    