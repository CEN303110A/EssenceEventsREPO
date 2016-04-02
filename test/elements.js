var elements = {
  navLoginButton: element(by.id('login')),
  loginButton: element(by.buttonText('Login')),
  emailInput: element(by.name('email')),
  passwordInput: element(by.name('password')),
  navBarButtons: element.all(by.id('navBarButton'))
}

module.exports = elements;
