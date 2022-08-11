class SettingsMenuComponent {
    get SettingsBtn() {
        return $('#user-links > a');
    }

    get AvatarMenu() {
        return $('ul.tabs').$$('li')[3].$('a');
    }
}

export default new SettingsMenuComponent();
