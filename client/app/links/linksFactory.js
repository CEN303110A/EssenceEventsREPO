angular.module('essenceEventsRepoApp').factory('Links', function() {
  var links = {
    entries: [
      {
        "type": "Photography",
        "name": "Allgood Photography",
        "site": "http://www.allgood-photography.com",
        "phoneNumber": "(904)945-8879",
        "img": "Hello"
      },
      {
        "type": "Photography",
        "name": "Photogrpahy by Ivy Hammer",
        "site": "http://www.ivyhammerphoto.com",
        "phoneNumber": "(352)870-3808"
      },
      {
        "type": "Rental Chair Covers and Sashes",
        "name": "Fancy That! of Ganesville",
        "site": "http://www.fancythatonline.com",
        "phoneNumber": "(352)505-6929"
      },
      {
        "type": "Invitations",
        "name": "Forever Graphics & Printing",
        "site": "http://www.forevergraphics.com",
        "phoneNumber": "(352)246-4620"
      }
    ]
  };
  return links.entries;
});
