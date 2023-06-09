$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature is used to test the login funcationality of simplilearn",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.scenario({
  "name": "Validate the Login failure scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"abc@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "pqr@xyz.com",
        "Pqr@1234",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "xyz@abc.com",
        "Xyz@1234",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"pqr@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Pqr@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"xyz@abc.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Xyz@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});