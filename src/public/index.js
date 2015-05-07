'use strict';

var node_angular_app = angular.module('node-angular',[]);

node_angular_app.controller('github-stats-controller', function ($scope, $http) {
	$scope.title = "Github statistiques - q4 2014";
	//request
	$http.get('api/github-stats').success(function(data, status, headers, config) {
		console.log(data);
	}).
	error(function(data, status, headers, config) {
		// log error
	});
});