# What is this?
Small testing project on my favourite website to demonstrate what kind of tools I'm familiar with. Also so far I wrote automated test with Node.js, and I wanted to try it out with TypeScript.

# What does it do if you run it?
1. Testing different kind of login scenarios to the site called Postcrossing.
2. Testing avatar upload to a Postcrossing account.

# Testing_postcrossing

This is the repository for automated tests on Postcrossing using [WebdriverIO] (wdio for short).

# how to run

1. Clone the repo `git clone https://github.com/HervayViktoria/Testing_Postcrossing.git`
2. Install the dependencies using `npm install`
3. In your local copy of this repo, rename `.env-sample` to `.env` and paste your postcrossing credentials to the right place. If you don't have a Postcrossing account - shame, make one, it is fun - contact me and I can give you a test account.
4. Run the tests in the terminal using `npm run test`


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