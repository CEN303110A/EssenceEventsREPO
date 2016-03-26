'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageEventCtrl', ['$scope', '$state', '$modal', '$q', 'Events', 'Auth', function ($scope, $state, $modal, $q, Events, Auth) {
    $scope.getEvents = function() {
      Events.getAll()
	.then(function(response) {
	  $scope.events = response.data;
	  var promises = [];
	  for (var i = 0; i < $scope.events.length; i++)
	    promises.push(Auth.getById($scope.events[i].userId));
	  $q.all(promises).then(function(res) {
	    console.log(res);
	  }, function(err) {
	    //do something
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
