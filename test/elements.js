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
  createAccountButton: element(by.buttonText('Create Account'))
}

module.exports = elements;
