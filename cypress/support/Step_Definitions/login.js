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
Then('the user should see an error message for invalid credentials', () => {
    loginPage.verifyInvalidCredentialsMessage();
});
// Negative test case for empty username
When('the user leaves the Username field empty', () => {
    loginPage.leavesUsernameFieldEmpty();
});
// Verify that the required message is displayed
Then('the user sees an error massage Required for Username field', () => {
    loginPage.verifyRequiredMessage();
});
// Verify that the required message is displayed
Then('the user sees an error massage Required for Password field', () => {
    loginPage.verifyRequiredMessage();
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