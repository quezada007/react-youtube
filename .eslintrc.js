module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "indent": ["warn", 4],
        "eol-last": "off",
        "max-len": "off",
        "comma-dangle": ["error", "never"],
        "react/jsx-indent": ["warn", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": "warn",
        "jsx-a11y/label-has-associated-control": [ 2, {
            "labelComponents": ["label"],
            "labelAttributes": ["htmlFor"],
            "controlComponents": ["input"]
        }]
    }
};