'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'state': 'main'
    },
    {
      'title': 'Services',
      'state': ''
    },
    {
      'title': 'Testimonials',
      'state': ''
    },
    {
      'title': 'Corporate',
      'state': ''
    },
    {
      'title': 'Weddings',
      'state': ''
    },
    {
      'title': 'Celebrations',
      'state': ''
    },
    {
      'title': 'Reservations',
      'state': ''
    },
    {
      'title': 'Links',
      'state': ''
    },
    {
      'title': 'About Us',
      'state': ''
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('essenceEventsRepoApp')
  .controller('NavbarController', NavbarController);
