angular.module('essenceEventsRepoApp.admin').factory('Subcontractors', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:9000/api/subcontractors');
      },

      getOne: function(id) {
	return $http.get('http://localhost:9000/api/subcontractors/' + id);
      },

      create: function(subcontractor) {
	return $http.post('http://localhost:9000/api/subcontractors', subcontractor);
      },

      update: function(subcontractor) {
	return $http.put('http://localhost:9000/api/subcontractors', subcontractor);
      },

      remove: function(id) {
	return $http.delete('http://localhost:9000/api/subcontractors/' + id);
      }
    };
    return methods;
  }
]);
