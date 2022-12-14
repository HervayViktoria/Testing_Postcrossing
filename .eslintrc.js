module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        'indent':  ['error', 4],
        'quotes': ['error', 'single'],
        'no-console': 'off',
        'class-methods-use-this': 'off',
        'linebreak-style':  ['error', 'windows'],
        'no-plusplus': 'off',
        'func-names': 'error',
        'prefer-arrow-callback': 'error',
        'import/extensions': 'off',
        'no-multiple-empty-lines': 'off',
        'arrow-spacing': ["error", { "before": true, "after": true }],
    },
    globals: {
        browser: true,
        describe: true,
        it: true,
        expect: true,
        mocha: true,
        $: true,
        $$: true,
        chai_assert: true,
        document: true,
        beforeEach: true,
        afterEach: true,
        before: true,
        after: true,
      },
}
