angular.module('essenceEventsRepoApp').factory('Links', ['$http', '$location', '$cookies',
  function($http, $location, $cookies) {
    var methods = {
      getAll: function() {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/links');
      },

      create: function(link) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/links' + '?access_token=' + $cookies.get('token'), link);
      },

      update: function(link) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/links' + '?access_token=' + $cookies.get('token'), link);
      },

      remove: function(id) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/links/' + id + '?access_token=' + $cookies.get('token'));
      }
    };
    return methods;
  }
]);