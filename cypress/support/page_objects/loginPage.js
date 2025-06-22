class LoginPage {
    elements = {
        usernameInput: () => cy.get('input[placeholder="Username"]'),
        passwordInput: () => cy.get('input[placeholder="Password"]'),
        loginButton: () => cy.get('button[type="submit"]'),
        dashboard: () => cy.get('.oxd-topbar-header'),
    };

    messages = {
        invalidCredentials: () => cy.get('.oxd-alert'),
        RequireMasssage: () => cy.get('.oxd-input-group > .oxd-text'),
    };

    visit() {
        cy.visit('/');
    }

    fillUsername(username) {
        this.elements.usernameInput().clear().type(username);
    }

    fillPassword(password) {
        this.elements.passwordInput().clear().type(password);
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }
    verifyDashboardContainsText(expectedText) {
        this.elements.dashboard()
          .should('be.visible')
          .should('contain.text', expectedText);
    }
    verifyInvalidCredentialsMessage() {
        this.messages.invalidCredentials()
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      }

    leavesUsernameFieldEmpty() {
        this.elements.usernameInput().should('be.empty');
      }

      verifyRequiredMessage() {
        this.messages.RequireMasssage()
          .should('be.visible')
          .and('contain.text', 'Required');
      }

      leavesPasswordFieldEmpty() {
        this.elements.passwordInput().should('be.empty');
      }
}

export default new LoginPage();