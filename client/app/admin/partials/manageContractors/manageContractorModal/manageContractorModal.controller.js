'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageContractorModalCtrl', ['$scope', '$state', '$q', '$modalInstance', 'subcontractor', 'Events', 'Subcontractors', function ($scope, $state, $q, $modalInstance, subcontractor, Events, Subcontractors)
  {
      $scope.subcontractor = JSON.parse(JSON.stringify(subcontractor));
      console.log($scope.subcontractor);
}]);