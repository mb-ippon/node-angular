'use strict';
var node_angular_app = angular.module('node-angular',['github-stats-service']);

node_angular_app.controller('github-stats-controller', ['githubStatsService','$scope','$http',function (githubStatsService, $scope, $http) {
	
	$scope.events = [{name : "IssuesEvent", ratio : 50}, {name : "WatchEvent", ratio : 100}, {name : "CreateEvent", ratio : 1}, {name : "PushEvent", ratio : 1000}, {name : "ForkEvent", ratio : 50}];
	
	$scope.title = "Github statistiques - q4 2014";
	
	$scope.changeGithubData = function(){
		if ($scope.dataIndex === $scope.events.length - 1){
			$scope.dataIndex = 0;
		}else{
			$scope.dataIndex++;
		}
	}
	
	//init
	var populateGihtubDatas = function(){
		githubStatsService.getAllGithubData(function(data){
			$scope.github_data = data;
			$scope.dataIndex = 0;
		});
	}

	//run populate
	populateGihtubDatas();
	
}])
.directive('githubChart', function() {
	return {
		restrict: 'E',
		templateUrl: 'partial/github-chart.html',
		link : function($scope, element, attrs) {
			
			$scope.$watch("dataIndex", function(newValue, oldValue) {
				if (newValue != oldValue){
					d3Chart($scope.github_data, newValue);
				}
			},true);
			
			function d3Chart(data, dataIndex){
				$scope.under_title = $scope.events[dataIndex].name;
				
				var chart = d3.select(".chart")
								.selectAll("div")
								.data(data,function(d){
									return d.language;
								});
				
				chart.enter().append("div");
				
				chart.style("width", function(d) { 
						var width = "0px";
						d.types.forEach(function(type){
							if (type.type === $scope.events[dataIndex].name){
								width = type.nb_repos / $scope.events[dataIndex].ratio + "px"; 
							}
						});
						return width;
					})
					.text(function(d) { 
						return d.language; 
					});
				
				chart.exit().remove();
			}
		}
	}
});
