var elements = require('./elements.js');

describe('Create New Customer', function() {
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

  it('should create a new customer', function() {
    var name = 'robot customer',
        email = 'test@test.com',
        password = 'test',
        phone = '111-222-3333';

    elements.navAdminButton.click();
    elements.customerNameInput.sendKeys(name);
    elements.customerEmailInput.sendKeys(email);
    elements.customerPasswordInput.sendKeys(password);
    elements.customerConfirmPasswordInput.sendKeys(password);
    elements.customerPhoneNumberInput.sendKeys(phone);
    elements.createAccountButton.click();
    elements.searchInput.sendKeys(name);

    expect(elements.allClients.count()).toEqual(1);
    expect(elements.firstClientName.getText()).toEqual(name);
  });

  it('should delete new customer', function() {
    var name = 'robot customer';
    
    elements.firstManageButton.click();
    elements.modalDeleteButton.click();
    elements.modalYesButton.click();
    elements.searchInput.sendKeys(name);

    expect(elements.allClients.count()).toEqual(0);
  });
});
