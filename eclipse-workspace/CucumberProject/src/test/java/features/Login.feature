@Browser
Feature: This feature is used to test the login funcationality of simplilearn
@WIP
  Scenario: Validate the Login scuccess scenario
    Given I have launched the application
    And I have clicked on login link
    When I enter username
    And I enter password
    And I click on login button
    Then I should land on home page
@Sanity
  Scenario: Validate the Login failure scenario
    Given I have launched the application
    And I have clicked on login link
    When I enter username
    And I enter password
    And I click on login button
    Then I should get the error message
@Sanity
  Scenario: Validate the Login failure scenario using parameters
    Given I have launched the application
    And I have clicked on login link
    When I enter username as "abc@xyz.com"
    And I enter password as "Abc@1234"
    And I click on login button
    Then I should get the error message as "The email or password you have entered is invalid."

@Regression
  Scenario Outline: Validate the Login failure scenario using examples
    Given I have launched the application
    And I have clicked on login link
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And I click on login button
    Then I should get the error message as "<Error>"

    Examples: 
      | UserName    | Password | Error                                              |
      | pqr@xyz.com | Pqr@1234 | The email or password you have entered is invalid. |
      | xyz@abc.com | Xyz@1234 | The email or password you have entered is invalid. |
