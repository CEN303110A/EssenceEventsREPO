angular.module('essenceEventsRepoApp').factory('Events', ['$http', '$location',
  function($http, $location) {
    var methods = {
      getAll: function() {
        return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/events');
      },

      getByUser: function(userId) {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/events/user/' + userId);
      },

      getOne: function(id) {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/events/' + id);
      },

      create: function(event) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/events', event);
      },

      toggleTodo: function(id, body) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/events/' + id, body);
      },

      update: function(event) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/events', event);
      },

      remove: function(id) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/events/' + id);
      },

      removeUser: function(userId) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/events/user/' + userId);
      }
    };
    return methods;
  }
]);
