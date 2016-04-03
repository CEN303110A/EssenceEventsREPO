'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageLinksModalCtrl', ['$scope', '$state', '$modalInstance', 'link', 'LinksFactory', function ($scope, $state, $modalInstance, link, LinksFactory)
{
  $scope.link = JSON.parse(JSON.stringify(link));

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

  //delete link
  $scope.deleteLink = function()
  {
    LinksFactory.remove(link._id).then(function()
      {
        $modalInstance.close();
        $state.reload();
      }
    );
  }



  $scope.submit = function() {
    if ($scope.link.name && $scope.link.url)
    LinksFactory.update($scope.link)
    .then(function(response) {
      $modalInstance.close();
      $state.reload();
    }, function(err) {
      //do something
    });
  };


}]);
