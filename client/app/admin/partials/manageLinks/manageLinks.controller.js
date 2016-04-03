'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageLinksCtrl', ['$scope', '$state', '$modal', 'LinksFactory', function ($scope, $state, $modal, LinksFactory) {
  $scope.getLinks = function() {
    LinksFactory.getAll()
    .then(function(response) {
      $scope.links = response.data;
    }, function(err) {
      //do something
    });
  };

  $scope.submit = function(type, name, url, phoneNumber, imageUrl) {
    var link = {
      type: type,
      name: name,
      url: url,
      phoneNumber: phoneNumber,
      photo: imageUrl
    };


    console.log(link);
    LinksFactory.create(link)
    .then(function(response) {
      $state.reload();
    }, function (err) {
      //do something
    });
  };

  $scope.openModal = function(link) {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'app/admin/partials/manageLinks/manageLinksModal/manageLinksModal.html',
      controller: 'ManageLinksModalCtrl',
      resolve: {
        link: function()
        {
          return link;
        }
      }
    });
  };
}]);
