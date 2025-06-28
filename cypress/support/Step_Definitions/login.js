import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../page_objects/loginPage';

// Background step to ensure the user is on the login page
Given('the user is on the login page', () => {
    loginPage.visit();
});
// Positive test case for successful login
When('the user enters {string} as Username', (Username) => {
    loginPage.fillUsername(Username);
});
// This step is used to fill the password field
When('the user enters {string} as Password', (Password) => {
    loginPage.fillPassword(Password);
});
// This step is used to click the login button
When('the user clicks the login button', () => {
    loginPage.clickLoginButton();
});
// This step is used to verify that the user is redirected to the dashboard
Then('the user should see the {string} heading on the page', (heading) => {
    loginPage.elements.dashboard().should('be.visible').and('contain.text', heading);
});
// Negative test case for invalid login
Then('the user should see an error message for {string}', (errorMessage) => {
    loginPage.verifyInvalidCredentialsMessage(errorMessage);
});
// Negative test case for empty username
When('the user leaves the Username field empty', () => {
    loginPage.leavesUsernameFieldEmpty();
});
// Verify that the required message is displayed
Then('the user sees an error message {string} for Username field', (errorMessage) => {
    loginPage.verifyRequiredMessage(errorMessage);
});
// Verify that the required message is displayed
Then('the user sees an error message {string} for Password field', (errorMessage) => {
    loginPage.verifyRequiredMessage(errorMessage);
});
// Negative test case for empty password
When('the user leaves the Password field empty', () => {
    loginPage.leavesPasswordFieldEmpty();
});
// Step untuk klik tombol logout
When('the user clicks the logout button', () => {
    loginPage.clickLogoutButton();
});
// Click the dropdown button to open the user dropdown menu
When('the user clicks dropdown button', () => {
    loginPage.dropdownButton();
});
// Step untuk verifikasi redirect ke halaman login
Then('the user should be redirected to the login page', () => {
    loginPage.verifyRedirectedToLoginPage();
});
// Step untuk klik tombol reset password
When('the user clicks the {string} link', () => {
    loginPage.elements.forgotPasswordLink().click();
});
// Assetion tampilan reset password page
Then('the user should be redirected to the forgot password page', () => {
    loginPage.verifyRedirectedToForgotPasswordPage();
});
// Step click Button Reset Password
When('the user clicks the {string} button', () => {
    loginPage.elements.resetPasswordButton().click();
});
// Step untuk verifikasi pesan sukses reset password
Then('the user should see a confirmation message {string}', (message) => {
    loginPage.verifyResetPasswordSuccessMessage(message);
});
// Step untuk klik tombol change password
When('the user selects "Change Password" from the dropdown', () => {
    loginPage.elements.changePasswordButton().click();
});
// Step untuk mengisi field New Password
When('the user enters {string} in the Current Password field', (password) => {
    loginPage.elements.currentPasswordInput().clear().type(password);
});
// Step untuk mengisi field New Password
When('the user enters {string} in the Password field with the requirement: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers', (password) => {
    loginPage.fillNewPassword(password);
});
