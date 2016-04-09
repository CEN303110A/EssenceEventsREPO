angular.module('essenceEventsRepoApp.admin')
  .controller('CreateContractorCtrl', ['$scope', '$state', 'Subcontractors', function ($scope, $state, Subcontractors) {
    //Save form fields to contractor object and save it to the database
    $scope.submit = function() {
      if ($scope.name) {
        var contractor = {
          name: $scope.name,
	  link: $scope.link
        };
        Subcontractors.create(contractor)
          .then(function(response) {
	    $state.go('admin.manageContractors');
          }, function(error) {
	    $scope.error = "Error: Check that name doesn't already exist";
        });
      }
    };

    //Get all subcontractors and save them to $scope.subcontractors
    $scope.find = function() {
      Subcontractors.getAll()
	.then(function(response) {
	  $scope.subcontractors = response.data;
	}, function(error) {
	  $scope.error = 'Aint nothin';
      });
    };
}]);
