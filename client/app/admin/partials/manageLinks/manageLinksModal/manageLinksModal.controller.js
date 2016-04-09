'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageLinksModalCtrl', ['$scope', '$state', '$modalInstance', 'link', 'Links', function ($scope, $state, $modalInstance, link, Links)
{
  //Prevent changes from automatically changing the table behind the modal
  $scope.link = JSON.parse(JSON.stringify(link));

  //hideDeleteTab functionality
  $scope.hideDeleteTab = true;

  $scope.showDeleteTabFunc = function()
  {
    $scope.hideDeleteTab = false;
  }

  $scope.hideDeleteTabFunc = function()
  {
    $scope.hideDeleteTab = true;
  }

  //delete link
  $scope.deleteLink = function()
  {
    Links.remove(link._id).then(function()
      {
        $modalInstance.close();
        $state.reload();
      }
    );
  }

  //On submit, checks if user didn't just blank out fields and then saves to database
  $scope.submit = function() {
    if ($scope.link.name && $scope.link.url)
    Links.update($scope.link)
    .then(function(response) {
      $modalInstance.close();
      $state.reload();
    }, function(err) {
      //do something
    });
  };


}]);
