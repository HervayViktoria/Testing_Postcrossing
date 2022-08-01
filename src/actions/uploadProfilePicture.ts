import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SettingsPage from '../pages/SettingsPage';
import UploadFile from '../pages/UploadFile';

describe('Test picture upload', ()=> {
    it('Open and Sign in to Postcrossing', async()=> {
        await HomePage.openAndClickSignIn();
        await LoginPage.login(process.env.EMAIL, process.env.PASS);
    });

    it('click on settings menu', async()=> {
        await SettingsPage.clickOnSettingsBtn();
    });

    it('click on Avatar menu and upload picture with wrong extension', async()=>{
        await UploadFile.uploadInvalidAvatar();
        (await SettingsPage.AvatarMenu).click();
    });

    it('click on Avatar menu and upload valid picture', async()=>{
        await UploadFile.uploadValidAvatar();
        (await SettingsPage.AvatarMenu).click();
    });
});