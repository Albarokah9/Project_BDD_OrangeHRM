Feature: User Login Feature

    As a user,
    I want to log in to the OrangeHRM website,
    So that I can access the application dashboard and features.

    Background:
        Given the user is on the login page

    Scenario: Login with valid credentials
        When the user enters "Admin" as Username
        And the user enters "admin123" as Password
        And the user clicks the login button
        Then the user should see the "Dashboard" heading on the page

    Scenario: Login with invalid credentials
        When the user enters "InvalidUser" as Username
        And the user enters "InvalidPass" as Password
        And the user clicks the login button
        Then the user should see an error message for invalid credentials

    Scenario: Login with empty Username
        When the user leaves the Username field empty
        And the user enters "admin123" as Password
        And the user clicks the login button
        Then the user sees an error message Required for Username field

    Scenario: Login with empity Password
        When the user enters "Admin" as Username
        And the user leaves the Password field empty
        And the user clicks the login button
        Then the user sees an error message Required for Password field