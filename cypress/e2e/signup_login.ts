import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import { AccountOverviewPage } from '../pages/AccountOverviewPage';

const signupPage = new SignupPage();
const loginPage = new LoginPage();
const accountOverviewPage = new AccountOverviewPage();

const user = {
  firstName: 'Sai',
  lastName: 'Kumar',
  address: '1-15',
  city: 'Mailagadda',
  state: 'Telangana',
  zipCode: '509125',
  phone: '9398598487',
  ssn: '123987654673',
  username: `saiuser${Date.now()}`,
  password: 'Test@1234',
};

Given('I visit the ParaBank signup page', () => {
  signupPage.visit();
});

When('I create a new account with valid details', () => {
  signupPage.fillForm(user);
  signupPage.submit();
});

Then('I should be logged in automatically', () => {
   cy.contains('Your account was created successfully').should('be.visible');
});

Then('I logout and login with the same user', () => {
   cy.contains('Log Out').click();
   loginPage.login(user.username, user.password);
});

Then('I should see the account balance displayed', () => {
  accountOverviewPage.navigatetoAccountsOverview();
  accountOverviewPage.getBalance().then(balance => {
    cy.log('Account balance is: ' + balance);
    expect(balance).to.match(/\$\d+/); 
  });
});
