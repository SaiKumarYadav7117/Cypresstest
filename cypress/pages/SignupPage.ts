export class SignupPage {
  
  private locators = {
    firstName: '#customer\\.firstName',
    lastName: '#customer\\.lastName',
    address: '#customer\\.address\\.street',
    city: '#customer\\.address\\.city',
    state: '#customer\\.address\\.state',
    zipCode: '#customer\\.address\\.zipCode',
    phone: '#customer\\.phoneNumber',
    ssn: '#customer\\.ssn',
    username: '#customer\\.username',
    password: '#customer\\.password',
    repeatedPassword: '#repeatedPassword',
    registerButton: 'input[value="Register"]',
  };

  visit() {
    cy.visit('/register.htm');
  }

  fillForm(user: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
  }) {
    cy.get(this.locators.firstName).type(user.firstName);
    cy.get(this.locators.lastName).type(user.lastName);
    cy.get(this.locators.address).type(user.address);
    cy.get(this.locators.city).type(user.city);
    cy.get(this.locators.state).type(user.state);
    cy.get(this.locators.zipCode).type(user.zipCode);
    cy.get(this.locators.phone).type(user.phone);
    cy.get(this.locators.ssn).type(user.ssn);
    cy.get(this.locators.username).type(user.username);
    cy.get(this.locators.password).type(user.password);
    cy.get(this.locators.repeatedPassword).type(user.password);
  }

  submit() {
    cy.get(this.locators.registerButton).click();
  }
}
