'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageEventCtrl', ['$scope', '$state', '$modal', '$q', 'Events', 'Auth', function ($scope, $state, $modal, $q, Events, Auth) {
    $scope.filterPast = function() {
      return function(item) {
	return (new Date(item.date) < new Date());
      };
    };
    $scope.filterCurrent = function() {
      return function(item) {
	return (new Date(item.date) > new Date());
      };
    };
    $scope.getEvents = function() {
      Events.getAll()
	.then(function(response) {
	  $scope.events = response.data;
	  $scope.events.forEach(function(event) {
	    Auth.getById(event.userId)
	      .then(function(response) {
		event.userName = response.data.name;
	      }, function(err) {
		//do something
	    });
	  });
	}, function(error) {
	  //do something
      });
    };
    $scope.openModal = function(event) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/admin/partials/manageEvent/manageEventModal/manageEventModal.html',
        controller: 'ManageEventModalCtrl',
        resolve: {
          event: function()
          {
            return event;
          }
        }
      });
    };
}]);
