'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageContractorsCtrl', ['$scope', '$state', 'Subcontractors', function ($scope, $state, Subcontractors) {
    $scope.getSubcontractors = function() {
      Subcontractors.getAll()
        .then(function(response) {
	  $scope.subcontractors = response.data;
        }, function(err) {
	  //do something
      });
    }
    $scope.remove = function(id) {
      var subcontractor = {
	_id: id,
	name: "Don't ask",
	link: 'no'
      };
      Subcontractors.update(subcontractor)
        .then(function(response) {
	  $state.reload();
	}, function(err) {
	  //do something
      });
    }
}]);
