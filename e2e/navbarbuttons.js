var elements = require('./elements.js');

describe('Nav Bar Buttons', function() {
  browser.get('http://localhost:9000/');

  it('should login as admin', function() {
    var email = 'admin@example.com';
    var password = 'admin'

    expect(elements.navBarButtons.count()).toEqual(6);

    elements.navLoginButton.click();
    elements.emailInput.sendKeys('admin@example.com');
    elements.passwordInput.sendKeys('admin');
    elements.loginButton.click();

    expect(elements.navBarButtons.count()).toEqual(7);
  });
});
