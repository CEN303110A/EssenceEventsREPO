'use strict';

describe('Service: manageClients', function () {

  // load the service's module
  beforeEach(module('essenceEventsRepoApp'));

  // instantiate service
  var manageClients;
  beforeEach(inject(function (_manageClients_) {
    manageClients = _manageClients_;
  }));

  it('should do something', function () {
    expect(!!manageClients).to.be.true;
  });

});
