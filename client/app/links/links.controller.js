'use strict';

angular.module('essenceEventsRepoApp')
.controller('LinksCtrl', ['$scope', 'LinksFactory', function ($scope, LinksFactory) {
  $scope.other = false;

  $scope.getLinks = function() {
    LinksFactory.getAll()
      .then(function(response) {
	$scope.types = [];
        $scope.links = response.data;
	console.log($scope.links);
	console.log(response.data);
	for (var i = 0; i < $scope.links.length; i++) {
	  if ($scope.links[i].type) {
	    if ($scope.types.join('~').toLowerCase().split('~').indexOf($scope.links[i].type.toLowerCase()) == -1)
	      $scope.types.push($scope.links[i].type);
	  }
	  else
	    $scope.other = true;
	}
      }, function(err) {
	  //do something
    });
  }
}]);