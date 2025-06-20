import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../page_objects/loginPage';

// Background step to ensure the user is on the login page
Given('the user is on the login page', () => {
    loginPage.visit();
});
// Positive test case for successful login
When('the user enters {string} as username', (username) => {
    loginPage.fillUsername(username);
});
// This step is used to fill the password field
When('the user enters {string} as password', (password) => {
    loginPage.fillPassword(password);
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