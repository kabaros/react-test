module.exports = {
    "env": {
        "browser": true,
        "jest/globals": true,
        "es6": true
    },
    "plugins": [
        "react", "jest"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "arrowFunctions":true
        }
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"]

};