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
    $scope.calendarView = 'month';
    $scope.calendarDate = new Date(2013,1,1);
    $scope.list = [
  {
    title: 'Do something on the todo list', // The title of the event
    startsAt: new Date(2013,1,1), // A javascript date object for when the event starts
  },
  {
    title: 'Do something else', // The title of the event
    startsAt: new Date(2013,0,31), // A javascript date object for when the event starts
  }
    ];
}])
  .filter('url', function() {
    return function(link) {
      var result;
      var httpStart = "http://";
      var httpsStart = "https://";
      if (link.startsWith(httpStart) || link.startsWith(httpsStart))
	result = link;
      else
	result = httpStart + link;
      return result;
    };
});
