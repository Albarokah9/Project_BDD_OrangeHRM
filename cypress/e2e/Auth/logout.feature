Feature: User Logout Functionality
    As a user
    I want to Logout from the website
    So that I can end my session securely

    Background:
        Given the user is on the login page 

    Scenario: TC_LOGOUT_01 - User can log out successfully
        When the user enters "Admin" as Username
        And the user enters "admin123" as Password
        And the user clicks the login button
        Then the user should see the "Dashboard" heading on the page
        When the user clicks dropdown button
        When the user clicks the logout button
        Then the user should be redirected to the login page