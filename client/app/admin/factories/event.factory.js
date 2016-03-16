angular.module('essenceEventsRepoApp.admin').factory('Events', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/events');
      },

      getByUser: function(userId) {
	return $http.get('http://localhost:8080/api/events/user/' + userId);
      },

      getOne: function(id) {
	return $http.get('http://localhost:8080/api/events/' + id);
      },

      create: function(event) {
	return $http.post('http://localhost:8080/api/events', event);
      },

      update: function(event) {
	return $http.put('http://localhost:8080/api/events', event);
      },

      remove: function(id) {
	return $http.delete('http://localhost:8080/api/events/' + id);
      }
    };
    return methods;
  }
]);