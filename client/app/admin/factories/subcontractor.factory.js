angular.module('essenceEventsRepoApp.admin').factory('Subcontractors', ['$http', '$location',
  function($http, $location) {
    var methods = {
      getAll: function() {
        return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors');
      },

      getOne: function(id) {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors/' + id);
      },

      create: function(subcontractor) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors', subcontractor);
      },

      update: function(subcontractor) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors', subcontractor);
      },

      remove: function(id) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors/' + id);
      }
    };
    return methods;
  }
]);
