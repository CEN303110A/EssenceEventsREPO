var elements = {
  //nav bar
  navBarButtons: element.all(by.className('navBarButton')),
  navLoginButton: element(by.id('login')),
  navAdminButton: element(by.id('Admin')),
  //login page
  loginButton: element(by.buttonText('Login')),
  emailInput: element(by.name('email')),
  passwordInput: element(by.name('password')),
  //create customer page
  customerNameInput: element(by.name('name')),
  customerEmailInput: element(by.name('email')),
  customerPasswordInput: element(by.name('password')),
  customerConfirmPasswordInput: element(by.name('confirmPassword')),
  customerPhoneNumberInput: element(by.name('phoneNumber')),
  createAccountButton: element(by.buttonText('Create Account')),
  //admin nav
  manageClientButton: element(by.id('Manage Client')),
  //Manage Client
  searchInput: element(by.model('searchClients')),
  allClients: element.all(by.repeater('user in mc.alldata')),
  firstClientName: element.all(by.binding('user.name')).first(),
  firstClientPhoneNumber: element.all(by.binding('user.phoneNumber')).first(),
  firstClientEmail: element.all(by.binding('user.email')).first(),
  firstManageButton: element.all(by.buttonText('Manage')).first(),
  modalDeleteButton: element(by.id('delete')),
  modalYesButton: element(by.buttonText('Yes'))
}

module.exports = elements;
