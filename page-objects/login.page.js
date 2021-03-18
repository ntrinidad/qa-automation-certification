import { Selector, t } from 'testcafe';

class LoginPage {
  constructor() {
    this.usernameField = Selector('input[data-test="username"]');
    this.passwordField = Selector('input[data-test="password"]');
    this.loginButton = Selector('#login-button');
    this.errorMessage = Selector('[data-test="error"]');
  }

  async submitForm (username, password) {
    await t
      .typeText(this.usernameField, username)
      .typeText(this.passwordField, password)
      .click(this.loginButton);
  }
}

export default new LoginPage();
