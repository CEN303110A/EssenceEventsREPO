'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageContractorsCtrl', ['$scope', '$state', '$modal', 'Subcontractors', function ($scope, $state, $modal, Subcontractors) {
    $scope.getSubcontractors = function() {
      Subcontractors.getAll()
        .then(function(response) {
	  $scope.subcontractors = response.data;
        }, function(err) {
	  //do something
      });
    };
    $scope.openModal = function(subcontractor) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/admin/partials/manageContractors/manageContractorModal/manageContractorModal.html',
        controller: 'ManageContractorModalCtrl',
        resolve: {
          subcontractor: function()
          {
            return subcontractor;
          }
        }
      });
    };
}])
  .filter('url', function() {
    return function(link) {
      if (link) {
        var result;
        var httpStart = "http://";
        var httpsStart = "https://";
        if (link.startsWith(httpStart) || link.startsWith(httpsStart))
	  result = link;
        else
	  result = httpStart + link;
        return result;
      }
      else
	return link;
    };
});
