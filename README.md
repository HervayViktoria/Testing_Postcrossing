# testing_postcrossing

This is the repository for automated tests on Postcrossing using [WebdriverIO] (wdio for short).

# how to run

1. Clone the repo `git clone https://github.com/HervayViktoria/Testing_Postcrossing.git`
2. Install the dependencies using `npm install`
3. In your local copy of this repo, rename `.env-sample` to `.env` and paste your postcrossing credentials to the right place. If you don't have a Postcrossing account - shame, make one, it is fun - contact me and I can give you a test account.
4. Run the ests in the terminal using `npm run test`


## project structure

```bash
└── src                          # testing application files
    ├── actions                  # test files, grouped by page/feature
    │   ├── login
    │   ├── edit_profile
    ├── assets                   # asset files
    │   └── pictures
    └── pages                    # Page Object files
        └── components           # Component Object files used by the page objects
```

This files in the `/pages` directory use the [Page Object Model](https://webdriver.io/docs/pageobjects/)

### eslint

Using ESLint to keel this repo neat and tidy.

### wdio docs

If you get stuck, the [WDIO documentation](https://webdriver.io/docs/gettingstarted) is a great resource when writing automated tests