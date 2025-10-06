export class LoginPage {

  private locators = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'input[value="Log In"]',
  };

  visit() {
    cy.visit('/');
  }

  login(username: string, password: string) {
    cy.get(this.locators.usernameInput).type(username);
    cy.get(this.locators.passwordInput).type(password);
    cy.get(this.locators.loginButton).click();
  }
}
