'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('CreateContractorCtrl', function ($scope) {
    $scope.submit = function() {
      var contractor = {
        name: $scope.name,
	link: $scope.link
      }
      
    };
});
