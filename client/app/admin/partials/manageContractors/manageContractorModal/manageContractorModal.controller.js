'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageContractorModalCtrl', ['$scope', '$state', '$modalInstance', 'subcontractor', 'Subcontractors', 'Events', function ($scope, $state, $modalInstance, subcontractor, Subcontractors, Events)
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
    Events.removeSubcon(subcontractor._id).then(function() {
      Subcontractors.remove(subcontractor._id).then(
        function()
        {
          $modalInstance.close();
          $state.reload();
        }
      );
    });
  }

  //Save changes to subcontractor to database on submit
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

  //Close modal without changing anything
  $scope.cancel = function() {
    $modalInstance.close();
  }
}]);
