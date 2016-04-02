angular.module('essenceEventsRepoApp').factory('LinksFactory', ['$http', '$location',
  function($http, $location) {
    var methods = {
      getAll: function() {
	return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/links');
      },

      create: function(link) {
	return $http.post('http://' + $location.host() + ':' + $location.port() + '/api/links', link);
      },

      update: function(link) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/links', link);
      },

      remove: function(id) {
	return $http.delete('http://' + $location.host() + ':' + $location.port() + '/api/links/' + id);
      }
    };
    return methods;
  }
]);