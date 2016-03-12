angular.module('essenceEventsRepoApp.admin').factory('Subcontractors', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/subcontractors');
      },

      create: function(contractor) {
	return $http.post('http://localhost:8080/api/subcontractors', contractor);
      }
    };
  }
]);