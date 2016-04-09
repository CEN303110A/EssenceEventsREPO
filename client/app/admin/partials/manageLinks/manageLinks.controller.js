'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageLinksCtrl', ['$scope', '$state', '$modal', 'Links', function ($scope, $state, $modal, Links) {
  //Get all links from Links Factory
  $scope.getLinks = function() {
    Links.getAll()
    .then(function(response) {
      $scope.links = response.data;
    }, function(err) {
      //do something
    });
  };

  //Setup link from form information and save to database
  $scope.submit = function(type, name, url, phoneNumber, imageUrl) {
    var link = {
      type: type,
      name: name,
      url: url,
      phoneNumber: phoneNumber,
      photo: imageUrl
    };
    Links.create(link)
    .then(function(response) {
      $state.reload();
    }, function (err) {
      //do something
    });
  };

  //Open Manage Links Modal to edit link information
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
