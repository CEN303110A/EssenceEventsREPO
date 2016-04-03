angular.module('essenceEventsRepoApp').factory('Links', ['$http', '$location',

  function($http, $location) {
    var links = {
      getAll: function() {
        return $http.get('http://' + $location.host() + ':' + $location.port() + '/api/links');
      }
    };

    return links;


    // entries: [
    //   {
    //     "type": "Photography",
    //     "name": "Allgood Photography",
    //     "site": "http://www.allgood-photography.com",
    //     "phoneNumber": "(904)945-8879",
    //     "img": "assets/images/links/allgoodphotography.jpg"
    //   },
    //   {
    //     "type": "Photography",
    //     "name": "Photogrpahy by Ivy Hammer",
    //     "site": "http://www.ivyhammerphoto.com",
    //     "phoneNumber": "(352)870-3808",
    //     "img": ""
    //   },
    //   {
    //     "type": "Rental Chair Covers and Sashes",
    //     "name": "Fancy That! of Ganesville",
    //     "site": "http://www.fancythatonline.com",
    //     "phoneNumber": "(352)505-6929",
    //     "img": ""// entries: [
    //   {
    //     "type": "Photography",
    //     "name": "Allgood Photography",
    //     "site": "http://www.allgood-photography.com",
    //     "phoneNumber": "(904)945-8879",
    //     "img": "assets/images/links/allgoodphotography.jpg"
    //   },
    //   {
    //     "type": "Photography",
    //     "name": "Photogrpahy by Ivy Hammer",
    //     "site": "http://www.ivyhammerphoto.com",
    //     "phoneNumber": "(352)870-3808",
    //     "img": ""
    //   },
    //   {
    //     "type": "Rental Chair Covers and Sashes",
    //     "name": "Fancy That! of Ganesville",
    //     "site": "http://www.fancythatonline.com",
    //     "phoneNumber": "(352)505-6929",
    //     "img": ""
    //   },
    //   {
    //     "type": "Invitations",
    //     "name": "Forever Graphics & Printing",
    //     "site": "http://www.forevergraphics.com",
    //     "phoneNumber": "(352)246-4620",
    //     "img": "assets/images/links/fgp1.png"
    //   }
    // ]
    //   },
    //   {
    //     "type": "Invitations",
    //     "name": "Forever Graphics & Printing",
    //     "site": "http://www.forevergraphics.com",
    //     "phoneNumber": "(352)246-4620",
    //     "img": "assets/images/links/fgp1.png"
    //   }
    // ]

  }]
);
