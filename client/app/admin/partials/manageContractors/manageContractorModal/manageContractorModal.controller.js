'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageContractorModalCtrl', ['$scope', '$state', '$modalInstance', 'subcontractor', 'Subcontractors', function ($scope, $state, $modalInstance, subcontractor, Subcontractors)
  {
      $scope.subcontractor = JSON.parse(JSON.stringify(subcontractor));

      $scope.submit = function() {
        if ($scope.subcontractor.name)
	  Subcontractors.update($scope.subcontractor)
	    .then(function(response) {
	      $modalInstance.close();
	      $state.reload();
	    }, function(err) {
	      //do something
	  });
      };
}]);