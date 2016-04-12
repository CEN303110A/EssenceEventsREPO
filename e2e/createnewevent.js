var elements = require('./elements.js');
var ManageClient = require('./components/client/manageclient.po.js');

var clientName = 'robot customer',
    eventName = 'robot event',
    email = 'test@test.com',
    password = 'test',
    phone = '1112223333',
    venue = 'house',
    date = 'Wednesday, April 6 2017',
    minute = new Date().getMinutes() + 5,
    budgetGoal = '500',
    item = 'present',
    cost = '100',
    task = 'robot task';

describe('Create New Event', function() {
  var manageClient = new ManageClient();

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

  it('should delete soon-to-be added customer exists', function() {
    elements.navAdminButton.click();
    elements.adminNavButtons('Manage Clients').click();

    manageClient.checkForClient(clientName);
    expect(elements.allClients.count()).toEqual(0);

    elements.adminNavButtons('New Client').click();
  });

  it('should create a new customer', function() {
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

    elements.taskInput.sendKeys(task);
    elements.addTodoButton.click();

    expect(elements.todoList.count()).toEqual(1);

    elements.submitEventButton.click();
    elements.searchEventInput.sendKeys(eventName);

    expect(elements.firstEventName.getText()).toEqual(eventName);
    expect(elements.firstEventVenue.getText()).toEqual(venue);
  });

  it('should manage newly created event', function() {
    var newName = 'new name',
        newVenue = 'new venue',
        newBudget = '600',
        newTodo = 'get stuff',
        newItem = 'item 2',
        newCost = +cost + +'250',
        guestName = 'robot guest',
        guestPhone = '9999999999',
        guestEmail = 'guest@robot',
        partySize = '1';

    elements.manageButton.click();
    elements.eventModNameInput.sendKeys(newName);
    elements.eventModVenueInput.sendKeys(newVenue);
    elements.eventModBudgetInput.clear();
    elements.eventModBudgetInput.sendKeys(newBudget);
    elements.eventModTab('Schedule').click();

    expect(elements.eventModTodoList.count()).toEqual(1);
    elements.eventModTodoInput.sendKeys(newTodo);
    elements.eventModSchCalButton.click();
    elements.todayButton.click();
    elements.eventModAddTodo.click();
    expect(elements.eventModTodoList.count()).toEqual(2);

    elements.eventModFirstRemoveTodo.click()
    expect(elements.eventModTodoList.count()).toEqual(1);

    elements.eventModTab('Budget').click();
    expect(elements.eventModCost.getText()).toEqual('COST: ' + cost + ' GOAL: ' + newBudget);
    expect(elements.eventModCostList.count()).toEqual(1);
    elements.eventModItemInput.sendKeys(newItem);
    elements.eventModCostInput.sendKeys('250');
    elements.eventModAddItem.click();
    expect(elements.eventModCostList.count()).toEqual(2);
    expect(elements.eventModCost.getText()).toEqual('COST: ' + newCost + ' GOAL: ' + newBudget);
    elements.eventModAddItem.click();
    expect(elements.eventModCostList.count()).toEqual(2);

    //elements.eventModSaveChangesButton.third().click();
    element(by.xpath('//h2[text()="Event Budget:"]/..//button[text()="Save Changes"]')).click();
    elements.searchEventInput.sendKeys(eventName);
    elements.manageButton.click();
    elements.eventModDelete.click();
    elements.modalYesButton.click();
  });

  it('should delete new user', function() {
    elements.adminNavButtons('Manage Clients').click();
    elements.searchClientInput.sendKeys(clientName);

    expect(elements.allClients.count()).toEqual(1);

    elements.firstManageButton.click();
    elements.modalDeleteButton.click();
    elements.modalYesButton.click();
    elements.searchClientInput.sendKeys(clientName);

  });

});
