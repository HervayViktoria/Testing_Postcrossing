import SettingsPage from './SettingsPage';
import * as path from 'path';

class UploadFile{

    public async uploadValidAvatar(){
        await SettingsPage.AvatarMenu.click();
        (await SettingsPage.ChooseAvatarBtn).setValue(path.join(__dirname, '../assets/pictures/pic1.jpg'));
        (await SettingsPage.UploadAvatarBtn).click();
        (await SettingsPage.CropBtn).click();
        await expect(SettingsPage.SuccessMsgForAvatarUpload).toHaveTextContaining('Your avatar has been updated.');
    }

    public async uploadInvalidAvatar() {
        (await SettingsPage.AvatarMenu).click();
        (await SettingsPage.ChooseAvatarBtn).setValue(path.join(__dirname, '../assets/pictures/wrongpic.heic'));
        (await SettingsPage.UploadAvatarBtn).click();
        (await SettingsPage.CropBtn).click();
        await expect(SettingsPage.ErrorMsgForInvalidAvatarUpload).toHaveTextContaining('Required');
    }
}

export default new UploadFile();