import SettingsPage from './SettingsPage';
import * as path from 'path';

class UploadFile{
    public get filePath(){
        return path.join(__dirname, '../../pictures/pic1.jpg');
    }

    public async uploadAvatarPicture(){
        await SettingsPage.AvatarMenu.click();
        await browser.pause(5000);
        // browser.execute(() => {
        //     document.getElementById('#upload_avatar_avatar').style.display = 'block';
        //   });
        (await SettingsPage.ChooseAvatarBtn).setValue(this.filePath);
        (await SettingsPage.UploadAvatarBtn).click();
        (await SettingsPage.CropBtn).click();
        await expect(SettingsPage.SuccessMsgForAvatarUpload).toHaveTextContaining('Your avatar has been updated.');
    }
}

export default new UploadFile();