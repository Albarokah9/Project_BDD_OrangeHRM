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
        changePasswordButton: () => cy.get('[href="/web/index.php/pim/updatePassword"]').contains('Change Password'),
        currentPasswordInput: () => cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        buttonPasswordInChangePassword: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        buttonConfirmPasswordInChangePassword: () => cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveButton: () => cy.contains('button', 'Save'),
    };

    messages = {
        invalidCredentials: () => cy.get('.oxd-alert'),
        RequireMessages: () => cy.get('.oxd-input-group > .oxd-text'),
        resetPasswordSuccess: () => cy.contains('h6', 'Reset Password link sent successfully'),
        toastMessageChangePassword: (text) => cy.get('.oxd-toast').should('be.visible').and('contain.text', text),
        // toastMessageSuccess: () => cy.get('.oxd-toast').contains('Success Successfully Saved'),
        // toastMessageError: () => cy.get('.oxd-toast').contains('Current Password is Incorrect'),
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
    verifyInvalidCredentialsMessage(expectedText) {
        this.messages.invalidCredentials().should('be.visible').and('contain.text', expectedText);
    }
    // Mengosokan field username
    leavesUsernameFieldEmpty() {
        this.elements.usernameInput().should('be.empty');
    }
    // Assertion to verify the required message for username and password fields
    verifyRequiredMessage(expectedText) {
        this.messages.RequireMessages().should('be.visible').and('contain.text', expectedText);
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
    verifyResetPasswordSuccessMessage(expectedText) {
        this.messages.resetPasswordSuccess().should('be.visible').and('contain.text', expectedText);
    }
    // Click the reset password button
    clickResetPasswordButton() {
        this.elements.changePasswordButton().click();
    }
    // Click Current Password input field
    clickCurrentPasswordInput() {
        this.elements.currentPasswordInput().click();
    }
    // fill the new password in the change password button
    fillNewPassword(password) {
        this.elements.buttonPasswordInChangePassword().clear().type(password);
    }
    // fill the confirm password in the change password button
    fillConfirmPassword(password) {
        this.elements.buttonConfirmPasswordInChangePassword().clear().type(password);
    }
    // Click the save button in the change password form
    clickSaveButton() {
        this.elements.saveButton().click();
    }
}

export default new LoginPage();
