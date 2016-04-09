'use strict';

angular.module('essenceEventsRepoApp')
.controller('LinksCtrl', ['$scope', 'Links', function ($scope, Links) {
  //Boolean value on whether to show the OTHER heading
  $scope.other = false;

  //Gets all links from Links Factory, and finds all unique types case insensitive to be used to sort,
  //set $scope .other to true if any link does not have a type
  $scope.getLinks = function() {
    Links.getAll()
      .then(function(response) {
	$scope.types = [];
        $scope.links = response.data;
	for (var i = 0; i < $scope.links.length; i++) {
	  if ($scope.links[i].type) {
	    if ($scope.types.join('^').toLowerCase().split('^').indexOf($scope.links[i].type.toLowerCase()) == -1)
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