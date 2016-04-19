angular.module('essenceEventsRepoApp').factory('Subcontractors', ['$http', '$location', '$cookies',
  function($http, $location, $cookies) {
    var methods = {
      getAll: function() {
        return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors');
      },

      getOne: function(id) {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors/' + id);
      },

      create: function(subcontractor) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors' + '?access_token=' + $cookies.get('token'), subcontractor);
      },

      update: function(subcontractor) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors' + '?access_token=' + $cookies.get('token'), subcontractor);
      },

      remove: function(id) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/subcontractors/' + id + '?access_token=' + $cookies.get('token'));
      }
    };
    return methods;
  }
]);
