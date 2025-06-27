class LoginPage {
    elements = {
        usernameInput: () => cy.get('input[placeholder="Username"]'),
        passwordInput: () => cy.get('input[placeholder="Password"]'),
        loginButton: () => cy.get('button[type="submit"]'),
        dashboard: () => cy.get('.oxd-topbar-header'),
        userdropdown: () => cy.get('.oxd-userdropdown-tab'),
        dropdownLogout: () => cy.get('[href="/web/index.php/auth/logout"]'),
        forgotPasswordLink: () => cy.get('.orangehrm-login-forgot').contains('Forgot your password?'),
        resetPasswordButton: () => cy.get('button[type="submit"]').contains('Reset Password'),
    };

    messages = {
        invalidCredentials: () => cy.get('.oxd-alert'),
        RequireMessages: () => cy.get('.oxd-input-group > .oxd-text'),
        resetPasswordSuccess: () => cy.contains('h6', 'Reset Password link sent successfully'),
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
        this.messages.RequireMessages().should('be.visible').and('contain.text', 'Required');
    }
// Mengosokan field password
    leavesPasswordFieldEmpty() {
        this.elements.passwordInput().should('be.empty');
    }
// Click dropdown button to open the user dropdown menu
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
// Verification that the user is redirected to the forgot password page
    verifyRedirectedToForgotPasswordPage() {
        cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');
        this.elements.resetPasswordButton().should('be.visible');
    }
// Verification that the reset password success message is displayed
    verifyResetPasswordSuccessMessage() {
        this.messages.resetPasswordSuccess().should('be.visible');
    }
}

export default new LoginPage();