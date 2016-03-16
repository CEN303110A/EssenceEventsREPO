'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageEventCtrl', ['$scope', '$state', 'Events', function ($scope, $state, Events) {
    $scope.getEvents = function() {
      Events.getAll()
	.then(function(response) {
	  $scope.events = response.data;
	}, function(err) {
	  //do something
      });
    }
    $scope.remove = function(id) {
      var event = {
	_id: id,
	userId: "56e9d5f06874ee9e0770faca",
	name: "change",
        description: "A party of sorts",
	date: "today sometime " + new Date()
      };
      Events.update(event)
	.then(function(response) {
	  $state.reload();
	}, function(err) {
	  //do something
      });
    }
}]);
