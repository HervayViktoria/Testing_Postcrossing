class SettingsPage{
    public get SettingsBtn(){
        return $('#user-links > a');
    }

    public get AvatarMenu(){
        return $('ul.tabs').$$('li')[3].$('a');
    }

    public get ChooseAvatarBtn(){
        return $('[type="file"]');
    }

    public get UploadAvatarBtn(){
        return $('[type="submit"]');
    }

    public get CropBtn(){
        return $('#cropButton');
    }

    public get SuccessMsgForAvatarUpload(){
        return $('.success.highlight-effect');
    }

    public get ErrorMsgForInvalidAvatarUpload(){
        return $('.error_list > li');
    }


    public async clickOnSettingsBtn(){
        (await this.SettingsBtn).click();
        expect(browser).toHaveUrl('https://www.postcrossing.com/edit/account');
    }
}

export default new SettingsPage();