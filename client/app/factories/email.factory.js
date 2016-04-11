angular.module('essenceEventsRepoApp').factory('Email', ['$http', '$location',
  function($http, $location) {
    var methods = {
      contactUs: function (email) {
        return $http.post('http://' + $location.host() + ':' + $location.port() +'/api/email', email);
      },

      resetPass: function (body) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/email', body);
      }
    };
    return methods;
  }
]);
