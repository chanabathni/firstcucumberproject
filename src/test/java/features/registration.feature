@tag
Feature: New user Registration
  I want new user to be registerd by clicking on signup button

  @tag1
  Scenario Outline: User Navigates to signup page clicking on signup button
    Given I want to give the url in  browser "<URL>"
    When I enter the url login/home page should be displayed with signup button
    And I click on signup button
    Then I verify the "<status>" in step

    Examples: 
      | URL                             | status  |
      | http://elearningm1.upskills.in/ | success |

  @tag2
  Scenario Outline: user clicks on signup button and fill the form
    Given I should  click on the signup button
    When I click on sign up button registartion page gets displayed
    And I enter all the mandatory fields
    And I enter  First name
    And I enter Last name
    And I enter e-mail
    And I enter Username "<username>"
    And I enter Pass
    And I enter Confirm password
    Then I click on register link

    Examples: 
      | username |
      | signup228 |

  @tag3
  Scenario: user clicks on dropdown to validate the profile details
    Given I should  click on the dropdown button
    When I click on dropdown profile details gets displayed
    And I view first and last name
    And I view email address
    Then I click on home page

  @tag4
  Scenario: user clicks on compose link to send email
    Given I should  click on the home page section
    When click on compose option
    And I view new window opened
    And I enter details in send to field
    And I enter subject
    And I enter Message
    Then I click on send message
  
