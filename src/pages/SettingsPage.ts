// eslint-disable-next-line import/no-unresolved
import SettingsMenuComponent from './components/settingsMenuComponent';

class SettingsPage {
    public get ChooseAvatarBtn() {
        return $('[type="file"]');
    }

    public get UploadAvatarBtn() {
        return $('[type="submit"]');
    }

    public get CropBtn() {
        return $('#cropButton');
    }

    public get SuccessMsgForAvatarUpload() {
        return $('.success.highlight-effect');
    }

    public get ErrorMsgForInvalidAvatarUpload() {
        return $('.error_list > li');
    }

    public async clickOnSettingsBtn() {
        await SettingsMenuComponent.SettingsBtn.click();
        // expect(browser).toHaveUrl('https://www.postcrossing.com/edit/account');
    }

    public async clickOnAvatarMenu() {
        await SettingsMenuComponent.AvatarMenu.click();
    }
}

export default new SettingsPage();
