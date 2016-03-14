angular.module('essenceEventsRepoApp.admin')
  .controller('CreateContractorCtrl', ['$scope', 'Subcontractors', function ($scope, Subcontractors) {
    $scope.submit = function() {
      var contractor = {
        name: $scope.name,
	link: $scope.link
      }
      $scope.error = $scope.name + $scope.link;
      Subcontractors.create(contractor)
        .then(function(response) {
	  $state.error = 'success';
        }, function(error) {
	  $scope.error = 'No';
      });
    };

    $scope.find = function() {
      Subcontractors.getAll()
	.then(function(response) {
	  $scope.subcontractors = response.data;
	}, function(error) {
	  $scope.error = 'Aint nothin';
      });
    };
}]);
