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
      'state': 'services'
    },
    {
      'title': 'Testimonials',
      'state': ''
    },
    {
      'title': 'Corporate',
      'state': 'corporate'
    },
    {
      'title': 'Weddings',
      'state': 'weddings'
    },
    {
      'title': 'Celebrations',
      'state': 'celebrations'
    },
    {
      'title': 'Reservations',
      'state': 'reservations'
    },
    {
      'title': 'Links',
      'state': 'links'
    },
    {
      'title': 'About Us',
      'state': 'aboutus'
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
