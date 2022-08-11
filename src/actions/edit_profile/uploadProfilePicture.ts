/* eslint-disable import/no-unresolved */
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SettingsPage from '../../pages/SettingsPage';
import UploadFile from '../../pages/UploadFile';

describe('Test picture upload', () => {
    it('Open and Sign in to Postcrossing', async () => {
        await HomePage.openAndClickSignIn();
        await LoginPage.login(process.env.EMAIL, process.env.PASS);
    });

    it('click on settings menu', async () => {
        await SettingsPage.clickOnSettingsBtn();
    });

    it('click on Avatar menu and upload picture with wrong extension', async () => {
        await SettingsPage.clickOnAvatarMenu();
        await UploadFile.uploadInvalidAvatar();
    });

    it('click on Avatar menu and upload valid picture', async () => {
        await SettingsPage.clickOnAvatarMenu();
        await UploadFile.uploadValidAvatar();
    });
});
