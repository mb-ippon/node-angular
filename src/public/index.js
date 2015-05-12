'use strict';
var node_angular_app = angular.module('node-angular',['github-stats-service']);

node_angular_app.controller('github-stats-controller', ['githubStatsService','$scope','$http',function (githubStatsService, $scope, $http) {
	
	var events = [{name : "IssuesEvent", ratio : 50}, {name : "WatchEvent", ratio : 100}, {name : "CreateEvent", ratio : 1}, {name : "PushEvent", ratio : 1000}, {name : "ForkEvent", ratio : 50}];
	
	$scope.title = "Github statistiques - q4 2014";
	
	var github_data;
	
	// exemple d'une instruction watch sur le changement de données
	$scope.$watch(
			function(){return github_data},
			function(newValue, oldValue) {
				if (newValue){
					d3Chart(newValue, $scope.dataIndex);
				}
			}
	);

	$scope.changeGithubData = function(){
		if ($scope.dataIndex === 4){
			$scope.dataIndex = 0;
		}else{
			$scope.dataIndex++;
		}
		d3Chart(github_data, $scope.dataIndex);
	}
	
	var d3Chart = function(data, dataIndex){
		$scope.under_title = events[dataIndex].name;
		
		var chart = d3.select(".chart")
						.selectAll("div")
						.data(data,function(d){
							return d.language;
						});
		
		chart.enter().append("div");
		
		chart.style("width", function(d) { 
				var width = "0px";
				d.types.forEach(function(type){
					if (type.type === events[dataIndex].name){
						width = type.nb_repos / events[dataIndex].ratio + "px"; 
					}
				});
				return width;
			})
			.text(function(d) { 
				return d.language; 
			});
		
		chart.exit().remove();
	}

	//init
	var populateGihtubDatas = function(){
		githubStatsService.getAllGithubData(function(data){
			$scope.dataIndex = 0;
			github_data = data;
		});
	}

	//run populate
	populateGihtubDatas();
}]);
