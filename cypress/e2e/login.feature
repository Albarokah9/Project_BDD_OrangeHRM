Feature: Login Feature

    As a user,
    I want to log in to the OrangeHRM website,
    So that I can access the application dashboard and features.

    Background:
        Given the user is on the login page

    Scenario: Login with valid credentials
        When the user enters "Admin" as username
        And the user enters "admin123" as password
        And the user clicks the login button
        Then the user should see the "Dashboard" heading on the page

    Scenario: Login with invalid credentials
        When the user enters "InvalidUser" as username
        And the user enters "InvalidPass" as password
        And the user clicks the login button
        Then the user should see an error message for invalid credentials
