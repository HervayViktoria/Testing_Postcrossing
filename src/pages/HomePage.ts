class HomePage {
    // selectors
    public get signInBtn() {
        return $('[type="submit"].button');
    }

    // functions
    public async openMainPage() {
        await browser.url(`https://${process.env.SITE_URL}`);
    }

    public async clickOnSignIn() {
        await this.signInBtn.click();
    }

    public async openAndClickSignIn() {
        this.openMainPage();
        this.clickOnSignIn();
    }
}
export default new HomePage();
