'use strict';
var events = ["IssuesEvent", "WatchEvent", "CreateEvent", "PushEvent", "ForkEvent"];

var node_angular_app = angular.module('node-angular',[]);

node_angular_app.controller('github-stats-controller', function ($scope, $http) {
	$scope.title = "Github statistiques - q4 2014";

	//affichage du bar chart
	$scope.buildChart = function(){
		d3.select(".chart")
			.selectAll("div")
			.data($scope.data,function(d){
				return d.language;
			})
			.enter()
			.append("div")
			.style("width", function(d) { 
				var width = "0px";
				d.types.forEach(function(type){
					if (type.type === $scope.currentType){
						width = type.nb_repos /50 + "px"; 
					}
				});
				return width;
			})
			.text(function(d) { 
				return d.language; 
			});
	}

	//request
	$scope.populateGihtubDatas = function(){
		$http.get('api/github-stats').
		success(function(data, status, headers, config) {
			$scope.currentType = events[0];
			$scope.data = data;
			$scope.buildChart();
		}).
		error(function(data, status, headers, config) {
			// log error
		});
	}

	//run populate
	$scope.populateGihtubDatas();
});
