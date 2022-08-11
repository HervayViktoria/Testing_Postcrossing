/* eslint-disable import/no-unresolved */
import * as path from 'path';
import SettingsPage from './SettingsPage';


class UploadFile {
    public async uploadValidAvatar() {
        await SettingsPage.clickOnAvatarMenu();
        (await SettingsPage.ChooseAvatarBtn).setValue(path.join(__dirname, '../assets/pictures/pic1.jpg'));
        (await SettingsPage.UploadAvatarBtn).click();
        (await SettingsPage.CropBtn).click();
        await expect(SettingsPage.SuccessMsgForAvatarUpload).toHaveTextContaining('Your avatar has been updated.');
    }

    public async uploadInvalidAvatar() {
        await SettingsPage.clickOnAvatarMenu();
        (await SettingsPage.ChooseAvatarBtn).setValue(path.join(__dirname, '../assets/pictures/wrongpic.heic'));
        (await SettingsPage.UploadAvatarBtn).click();
        (await SettingsPage.CropBtn).click();
        await expect(SettingsPage.ErrorMsgForInvalidAvatarUpload).toHaveTextContaining('Unable to open image file');
    }
}

export default new UploadFile();
