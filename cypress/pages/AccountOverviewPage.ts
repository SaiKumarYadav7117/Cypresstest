export class AccountOverviewPage {

  private locators = {
    accountsOverviewLink: 'Accounts Overview',
    accountTableRows: '[id="accountTable"] tbody tr',
  };

  navigatetoAccountsOverview() {
    cy.contains(this.locators.accountsOverviewLink).click();
  }

  getBalance() {
    return cy
      .get(this.locators.accountTableRows)
      .eq(0)
      .find('td')
      .eq(2)
      .invoke('text');
  }
}
