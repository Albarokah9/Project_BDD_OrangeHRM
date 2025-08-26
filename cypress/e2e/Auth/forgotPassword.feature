Feature: User Forgot Password Functionality
    As a user
    I want to reset my password
    So that I can regain access to my account

    Background:
        Given the user is on the login page 

    Scenario: TC_FORGOTPASS_01 - User can request a password reset
        When the user clicks the "Forgot Password" link
        Then the user should be redirected to the forgot password page
        When the user enters "Admin" as Username
        And the user clicks the "Reset Password" button
        Then the user should see a confirmation message "Reset Password link sent successfully"