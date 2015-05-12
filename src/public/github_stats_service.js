'use strict';

angular.module('github-stats-service',[]).factory('githubStatsService',function($http){
	
	var getAllGithubData = function(onSuccess) {
		$http.get('api/github-stats')
			.success(function(data, status, headers, config) {
				onSuccess(data);
			})
			.error(function(data, status, headers, config) {
				// log error
			});
	}
	
	return {
		getAllGithubData : getAllGithubData
	}
});