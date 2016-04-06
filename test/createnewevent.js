var elements = require('./elements.js');

var clientName = 'robot customer',
    eventName = 'robot event',
    email = 'test@test.com',
    password = 'test',
    phone = '1112223333',
    venue = 'house',
    date = 'Wednesday, April 6 2017',
    minute = new Date().getMinutes() + 1,
    budgetGoal = '500',
    item = 'present',
    cost = '100',
    task = 'robot task';

describe('Create New Event', function() {
  browser.get('http://localhost:9000/');

  it('should login as admin', function() {
    var email = 'admin@example.com';
    var password = 'admin'

    expect(elements.navBarButtons.count()).toEqual(6);

    elements.navLoginButton.click();
    elements.emailInput.sendKeys(email);
    elements.passwordInput.sendKeys(password);
    elements.loginButton.click();

    expect(elements.navBarButtons.count()).toEqual(7);
  });

  it('should create a new customer', function() {
    elements.navAdminButton.click();
    elements.customerNameInput.sendKeys(clientName);
    elements.customerEmailInput.sendKeys(email);
    elements.customerPasswordInput.sendKeys(password);
    elements.customerConfirmPasswordInput.sendKeys(password);
    elements.customerPhoneNumberInput.sendKeys(phone);
    elements.createAccountButton.click();
    elements.searchClientInput.sendKeys(clientName);

    expect(elements.allClients.count()).toEqual(1);
    expect(elements.firstClientName.getText()).toEqual(clientName);
  });

  it('should create a new event', function() {
    elements.firstManageButton.click();
    elements.manageEventsTab.click();
    elements.createEventButton.click();

    elements.eventNameInput.sendKeys(eventName);
    elements.minuteInput.clear();
    elements.minuteInput.sendKeys(minute);
    elements.venueInput.sendKeys(venue);
    elements.budgetGoalInput.sendKeys(budgetGoal);
    elements.itemInput.sendKeys(item);
    elements.itemCostInput.sendKeys(cost);
    elements.addItemButton.click();

    expect(elements.itemList.count()).toEqual(1);

    elements.taskInput.sendKeys(task);
    elements.addTodoButton.click();

    expect(elements.todoList.count()).toEqual(1);

    elements.submitEventButton.click();
    elements.searchEventInput.sendKeys(eventName);

    expect(elements.firstEventName.getText()).toEqual(eventName);
    expect(elements.firstEventVenue.getText()).toEqual(venue);
  });

  it('should delete new user', function() {
    elements.manageClientButton.click();
    elements.searchClientInput.sendKeys(clientName);

    expect(elements.allClients.count()).toEqual(1);

    elements.firstManageButton.click();
    elements.modalDeleteButton.click();
    elements.modalYesButton.click();
    elements.searchClientInput.sendKeys(clientName);

    expect(elements.allClients.count()).toEqual(0);
  });

});
