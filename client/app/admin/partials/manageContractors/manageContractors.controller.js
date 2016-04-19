'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageContractorsCtrl', ['$scope', '$state', '$modal', 'Subcontractors', function ($scope, $state, $modal, Subcontractors) {
    //Get all subcontractors from database and save to $scope.subcontractors
    $scope.getSubcontractors = function() {
      Subcontractors.getAll()
        .then(function(response) {
	  $scope.subcontractors = response.data;
        }, function(err) {
	  //do something
      });
    };

    //Open Manage Contractor Modal to edit subcontractor information
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
  //Custom filter to add 'http://' to links so that they redirect away from essenceevents.net
  .filter('url', function() {
    return function(link) {
      if (link) {
        var result;
        var httpStart = "http://";
        var httpsStart = "https://";
        if (!link.indexOf(httpStart) || !link.indexOf(httpsStart))
	  result = link;
        else
	  result = httpStart + link;
        return result;
      }
      else
	return link;
    };
});
