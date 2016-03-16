'use strict';

angular.module('essenceEventsRepoApp')
  .controller('LinksCtrl', ['$scope', 'Links', function ($scope, Links) {
    $scope.message = 'Hello';
    $scope.links = Links;
  }]);
