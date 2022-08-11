/* eslint-disable import/no-unresolved */
import HomePage from './HomePage';

class LoginPage {
    // Selectors
    public get emailInput() {
        return $('#username');
    }

    public get passInput() {
        return $('#password');
    }

    public get loginBtn() {
        return $('#loginButton');
    }

    public get signOutBtn() {
        return $('.button-as-link');
    }

    public get errorMessage() {
        return $('#loginContainer > #loginForm > .error');
    }

    // Functions

    public async login(email: string, pass: string) {
        await this.emailInput.setValue(email);
        await this.passInput.setValue(pass);
        await this.loginBtn.click();
    }

    public async signOut() {
        await this.signOutBtn.click();
        expect(HomePage.signInBtn).toBeDisplayed();
    }

    public async loginWithInvalidEmailFormat() {
        await expect(this.errorMessage).toHaveTextContaining('is not a valid username.');
    }

    public async loginWithInvalidEmail() {
        await expect(this.errorMessage).toHaveTextContaining('Wrong username or password');
    }

    public async loginWithInvalidPass() {
        await expect(this.errorMessage).toHaveTextContaining('Wrong username or password');
    }
}

export default new LoginPage();
