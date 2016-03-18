'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageEventCtrl', ['$scope', '$state', '$modal', 'Events', function ($scope, $state, $modal, Events) {
    $scope.getEvents = function() {
      Events.getAll()
	.then(function(response) {
	  $scope.events = response.data;
	}, function(err) {
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
