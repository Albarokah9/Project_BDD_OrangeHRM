Feature: User Change Password Functionality
    As a user
    I want to change my password
    So that I can keep my account secure

    Background:
        Given the user is on the login page

    Scenario: TC_CHGPWD_01 - User can change password with valid current password
        When the user enters "Admin" as Username
        And the user enters "admin123" as Password
        And the user clicks the login button
        Then the user should see the "Dashboard" heading on the page
        When the user clicks dropdown button
        And the user selects "Change Password" from the dropdown
        And the user enters "admin123" in the Current Password field
        And the user enters "Admin123!**" in the Password field with the requirement: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
        And the user enters the same value in the Confirm Password field as in the New Password field "Admin123!**"
        And the user clicks the "Save" button
        Then the user should see a toast message containing "Successfully Saved"

    Scenario: TC_CHGPWD_01 - User cannot change password with invalid current password
        When the user enters "Admin" as Username
        And the user enters "admin123" as Password
        And the user clicks the login button
        Then the user should see the "Dashboard" heading on the page
        When the user clicks dropdown button
        And the user selects "Change Password" from the dropdown
        And the user enters "admin123**" in the Current Password field
        And the user enters "Admin123!**" in the Password field with the requirement: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
        And the user enters the same value in the Confirm Password field as in the New Password field "Admin123!**"
        And the user clicks the "Save" button
        Then the user should see a toast message containing "Current Password is Incorrect"