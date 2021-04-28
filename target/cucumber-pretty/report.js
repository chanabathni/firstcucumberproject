$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registration.feature");
formatter.feature({
  "line": 2,
  "name": "New user Registration",
  "description": "I want new user to be registerd by clicking on signup button",
  "id": "new-user-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User Navigates to signup page clicking on signup button",
  "description": "",
  "id": "new-user-registration;user-navigates-to-signup-page-clicking-on-signup-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to give the url in  browser \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the url login/home page should be displayed with signup button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the \"\u003cstatus\u003e\" in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "new-user-registration;user-navigates-to-signup-page-clicking-on-signup-button;",
  "rows": [
    {
      "cells": [
        "URL",
        "status"
      ],
      "line": 13,
      "id": "new-user-registration;user-navigates-to-signup-page-clicking-on-signup-button;;1"
    },
    {
      "cells": [
        "http://elearningm1.upskills.in/",
        "success"
      ],
      "line": 14,
      "id": "new-user-registration;user-navigates-to-signup-page-clicking-on-signup-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User Navigates to signup page clicking on signup button",
  "description": "",
  "id": "new-user-registration;user-navigates-to-signup-page-clicking-on-signup-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to give the url in  browser \"http://elearningm1.upskills.in/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the url login/home page should be displayed with signup button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the \"success\" in step",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 36
    }
  ],
  "location": "StepDefinition.i_want_to_give_the_url_in_browser(String)"
});
formatter.result({
  "duration": 12325386100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_the_url_login_home_page_should_be_displayed_with_signup_button()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_signup_button()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 14
    }
  ],
  "location": "StepDefinition.i_verify_the_in_step(String)"
});
formatter.result({
  "duration": 239200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "user clicks on signup button and fill the form",
  "description": "",
  "id": "new-user-registration;user-clicks-on-signup-button-and-fill-the-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I should  click on the signup button",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on sign up button registartion page gets displayed",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter all the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter  First name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Last name",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter e-mail",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Pass",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on register link",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "new-user-registration;user-clicks-on-signup-button-and-fill-the-form;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 30,
      "id": "new-user-registration;user-clicks-on-signup-button-and-fill-the-form;;1"
    },
    {
      "cells": [
        "signup128"
      ],
      "line": 31,
      "id": "new-user-registration;user-clicks-on-signup-button-and-fill-the-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "user clicks on signup button and fill the form",
  "description": "",
  "id": "new-user-registration;user-clicks-on-signup-button-and-fill-the-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 16,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I should  click on the signup button",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on sign up button registartion page gets displayed",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter all the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter  First name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Last name",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter e-mail",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Username \"signup128\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Pass",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on register link",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_should_click_on_the_signup_button()"
});
formatter.result({
  "duration": 3303112100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_sign_up_button_registartion_page_gets_displayed()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_all_the_mandatory_fields()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_First_name()"
});
formatter.result({
  "duration": 133099800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_Last_name()"
});
formatter.result({
  "duration": 112218500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_e_mail()"
});
formatter.result({
  "duration": 133830400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signup128",
      "offset": 18
    }
  ],
  "location": "StepDefinition.i_enter_Username(String)"
});
formatter.result({
  "duration": 111725900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_Pass()"
});
formatter.result({
  "duration": 141938600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_Confirm_password()"
});
formatter.result({
  "duration": 277746500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_register_link()"
});
formatter.result({
  "duration": 2157086800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "user clicks on dropdown to validate the profile details",
  "description": "",
  "id": "new-user-registration;user-clicks-on-dropdown-to-validate-the-profile-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I should  click on the dropdown button",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on dropdown profile details gets displayed",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I view first and last name",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I view email address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_should_click_on_the_dropdown_button()"
});
formatter.result({
  "duration": 130349900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_dropdown_profile_details_gets_displayed()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_view_first_and_last_name()"
});
formatter.result({
  "duration": 67170500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_view_email_address()"
});
formatter.result({
  "duration": 58120300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_home_page()"
});
formatter.result({
  "duration": 1918289400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "user clicks on compose link to send email",
  "description": "",
  "id": "new-user-registration;user-clicks-on-compose-link-to-send-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I should  click on the home page section",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "click on compose option",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I view new window opened",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter details in send to field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter subject",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter Message",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on send message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_should_click_on_the_home_page_section()"
});
formatter.result({
  "duration": 1388541400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_compose_option()"
});
formatter.result({
  "duration": 2800556600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_view_new_window_opened()"
});
formatter.result({
  "duration": 193600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_details_in_send_to_field()"
});
formatter.result({
  "duration": 4585148200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_subject()"
});
formatter.result({
  "duration": 5283125900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_Message()"
});
formatter.result({
  "duration": 764904800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_send_message()"
});
formatter.result({
  "duration": 2110176500,
  "status": "passed"
});
});