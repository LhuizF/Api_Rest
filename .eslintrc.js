module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'no-console': 'off',
        indent: ['error', 4],
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'comma-dangle': ['error', 'never'],
        'keyword-spacing': ['error', {
            overrides: {
                if: { after: false }
            }
        }]
    }
};
