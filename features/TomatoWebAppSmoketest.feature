Feature: Tomato Application Smoke test Flow
  As a new user
  I want to sign up, log in, set password, make payment and access dashboard and other screens
  So that I can use Tomato platform successfully

  Background:
    Given I navigate to the Tomato application

  Scenario: User signs up successfully
    When I click on the Register button
    And I enter company name "QAoncloud"
    And I enter first name "Jay"
    And I enter last name "Surya"
    And I enter email "jayasurya+167test@tomato.ai"
    And I accept the terms and conditions
    And I submit the signup form
    Then I should see the signup congratulation message
    And I click on "Go to Log In" button

  Scenario: User logs in and sets password
    When I enter work email "jayasurya+167test@tomato.ai"
    And I enter OTP manually
    Then I should be navigated to the Create Password page
    When I enter new password "Jayasurya123!"
    And I confirm new password "Jayasurya123!"
    And I click on Set Password button
    Then I should see success message
    And I click on "Log In" link

  Scenario: User logs in with new password
    When I enter login email "jayasurya+167test@tomato.ai"
    And I enter password "Jayasurya123!"
    And I click on Log In button
    Then I should be logged in successfully and land on payment screen
    When I enter card number "4242424242424242"
    And I enter expiry date "12/34"
    And I enter CVC "123"
    And I enter card holder name "Jay S"
    And I enter zip code "1543"
    And I click on Buy Now button
    Then I should see the Quick Start Guide
    Then I should see the Quick Start Guide
    When I click on "Let's Start!" button
    Then I should be on the Dashboard page
    And I should see the dashboard date selector
    When I open the dashboard dropdown
    And I select "All Accounts"
    And I open the dashboard dropdown again
    And I select "Default"
    Then I should see the dashboard graphs
    When I click on the License tab
    Then I should see license details
    When I toggle auto-pay off
    Then I should see "Auto-pay is OFF"
    When I toggle auto-pay on
    Then I should see "Auto-pay is ON"


  

