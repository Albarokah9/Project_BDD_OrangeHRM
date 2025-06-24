class LoginPage {
    elements = {
        usernameInput: () => cy.get('input[placeholder="Username"]'),
        passwordInput: () => cy.get('input[placeholder="Password"]'),
        loginButton: () => cy.get('button[type="submit"]'),
        dashboard: () => cy.get('.oxd-topbar-header'),
        userdropdown: () => cy.get('.oxd-userdropdown-tab'),
        dropdownLogout: () => cy.get('[href="/web/index.php/auth/logout"]'),
    };

    messages = {
        invalidCredentials: () => cy.get('.oxd-alert'),
        RequireMasssage: () => cy.get('.oxd-input-group > .oxd-text'),
    };
// Goto the login page
    visit() {
        cy.visit('/');
    }
// Fill in the username fields
    fillUsername(username) {
        this.elements.usernameInput().clear().type(username);
    }
// Fill in the password fields
    fillPassword(password) {
        this.elements.passwordInput().clear().type(password);
    }
// Click the login button
    clickLoginButton() {
        this.elements.loginButton().click();
    }
// Assertion to verify the user is logged in and redirected to the dashboard
    verifyDashboardContainsText(expectedText) {
        this.elements.dashboard().should('be.visible').should('contain.text', expectedText);
    }
// Asssertion invlaid credentials message
    verifyInvalidCredentialsMessage() {
        this.messages.invalidCredentials().should('be.visible').and('contain.text', 'Invalid credentials');
    }
// Mengosokan field username
    leavesUsernameFieldEmpty() {
        this.elements.usernameInput().should('be.empty');
    }
// Assertion to verify the required message for username and password fields
    verifyRequiredMessage() {
        this.messages.RequireMasssage().should('be.visible').and('contain.text', 'Required');
    }
// Mengosokan field password
    leavesPasswordFieldEmpty() {
        this.elements.passwordInput().should('be.empty');
    }
    dropdownButton() {
        this.elements.userdropdown().click();
    }
// Click the logout button
    clickLogoutButton() {
        this.elements.dropdownLogout().click();
    }
// Verification that the user is on the login page
    verifyRedirectedToLoginPage() {
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
}

export default new LoginPage();