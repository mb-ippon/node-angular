'use strict';
var events = [{name : "IssuesEvent", ratio : 50}, {name : "WatchEvent", ratio : 100}, {name : "CreateEvent", ratio : 1}, {name : "PushEvent", ratio : 1000}, {name : "ForkEvent", ratio : 50}];

var node_angular_app = angular.module('node-angular',[]);

node_angular_app.controller('github-stats-controller', function ($scope, $http) {
	$scope.title = "Github statistiques - q4 2014";

	$scope.changeGithubData = function(){
		if ($scope.currentTypeIndex === events.length - 1){
			$scope.currentTypeIndex = 0;
		}else{
			$scope.currentTypeIndex++;// = $scope.currentTypeIndex + 1;
		}
		$scope.buildChart();
	}

	//affichage du bar chart
	$scope.buildChart = function(){
		d3.select(".chart h3").text(events[$scope.currentTypeIndex].name);
		var chart = d3.select(".chart")
						.selectAll("div")
						.data($scope.data,function(d){
							return d.language;
						});
		
		chart.enter().append("div");
		
		chart.style("width", function(d) { 
				var width = "0px";
				d.types.forEach(function(type){
					if (type.type === events[$scope.currentTypeIndex].name){
						width = type.nb_repos /events[$scope.currentTypeIndex].ratio + "px"; 
					}
				});
				return width;
			})
			.text(function(d) { 
				return d.language; 
			});
		
		chart.exit().remove();
	}
	
	//request
	$scope.populateGihtubDatas = function(){
		$http.get('api/github-stats').
		success(function(data, status, headers, config) {
			$scope.currentTypeIndex = 0;
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
