/* eslint-disable import/no-unresolved */
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

describe('Login to Postcrossing', () => {
    beforeEach(async () => {
        await HomePage.openAndClickSignIn();
    });

    it('login with invalid email', async () => {
        await LoginPage.login('doesnotexist@gmail.com', process.env.PASS);
        await LoginPage.loginWithInvalidEmail();
    });

    it('login with invalid pass', async () => {
        await LoginPage.login(process.env.EMAIL, 'invalis-pass');
        await LoginPage.loginWithInvalidPass();
    });

    it('login with valid credentials and logout', async () => {
        await LoginPage.login(process.env.EMAIL, process.env.PASS);
        await LoginPage.signOut();
    });
});
