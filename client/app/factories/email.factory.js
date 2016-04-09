angular.module('essenceEventsRepoApp').factory('Email', ['$http', '$location',
  function($http, $location) {
    var methods = {
      contactUs: function (email) {
        return $http.post('http://' + $location.host() + ':' + $location.port() +'/api/email', email);
      },

      resetPass: function (email) {
	return $http.put('http://' + $location.host() + ':' + $location.port() + '/api/email', {email: email});
      }
    };
    return methods;
  }
]);
