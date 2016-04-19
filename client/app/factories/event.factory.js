angular.module('essenceEventsRepoApp').factory('Events', ['$http', '$location', '$cookies',
  function($http, $location, $cookies) {
    var methods = {
      getAll: function() {
        return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/events' + '?access_token=' + $cookies.get('token'));
      },

      getByUser: function(userId) {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/events/user/' + userId + '?access_token=' + $cookies.get('token'));
      },

      getOne: function(id) {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/events/' + id + '?access_token=' + $cookies.get('token'));
      },

      create: function(event) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/events' + '?access_token=' + $cookies.get('token'), event);
      },

      toggleTodo: function(id, body) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/events/' + id + '?access_token=' + $cookies.get('token'), body);
      },

      update: function(event) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/events' + '?access_token=' + $cookies.get('token'), event);
      },

      removeSubcon: function(id) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/events/' + id + '?access_token=' + $cookies.get('token'), {});
      },

      remove: function(id) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/events/' + id + '?access_token=' + $cookies.get('token'));
      },

      removeUser: function(userId) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/events/user/' + userId + '?access_token=' + $cookies.get('token'));
      }
    };
    return methods;
  }
]);
