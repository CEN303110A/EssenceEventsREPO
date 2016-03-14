angular.module('essenceEventsRepoApp.admin')
  .controller('CreateContractorCtrl', ['$scope', 'Subcontractors', function ($scope, Subcontractors) {
    $scope.submit = function() {
      var contractor = {
        name: $scope.name,
	link: $scope.link
      };
      Subcontractors.create(contractor)
        .then(function(response) {
	  $scope.error = 'Subcontractor successfully added';
        }, function(error) {
	  $scope.error = "Error: Check that name doesn't already exist";
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
