'use strict';

angular.module('github-stats-service',[]).factory('githubStatsService',function($http){
	
	var getAllGithubData = function(success) {
		$http.get('api/github-stats')
			.success(success)
			.error(function(data, status, headers, config) {
				// log error
			});
	}
	
	return {
		getAllGithubData : getAllGithubData
	}
});