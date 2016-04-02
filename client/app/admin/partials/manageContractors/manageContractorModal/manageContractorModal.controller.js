'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageContractorModalCtrl', ['$scope', '$state', '$modalInstance', 'subcontractor', 'Subcontractors', function ($scope, $state, $modalInstance, subcontractor, Subcontractors)
{
  $scope.subcontractor = JSON.parse(JSON.stringify(subcontractor));

  //hideDeleteTab
  $scope.hideDeleteTab = true;

  $scope.showDeleteTabFunc = function()
  {
    $scope.hideDeleteTab = false;
  }

  $scope.hideDeleteTabFunc = function()
  {
    $scope.hideDeleteTab = true;
  }

  //deleteSubcontractor
  $scope.deleteSubcontractor = function()
  {
    console.log('in here');
    Subcontractors.remove(subcontractor._id).then(
      function()
      {
        $modalInstance.close();
        $state.reload();
      }
    );
  }

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
