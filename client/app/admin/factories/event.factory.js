angular.module('essenceEventsRepoApp.admin').factory('Events', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/events');
      },

      create: function(event) {
	return $http.post('http://localhost:8080/api/events', event);
      }
    };
    return methods;
  }
]);