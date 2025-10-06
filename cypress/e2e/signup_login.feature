Feature: User Signup and Login on ParaBank

  Scenario: Successful signup and login with amount display
    Given I visit the ParaBank signup page
    When I create a new account with valid details
    Then I should be logged in automatically
    And I logout and login with the same user
    And I should see the account balance displayed
