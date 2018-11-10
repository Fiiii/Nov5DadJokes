module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "mocha": true,
      "jest": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb/legacy",
    "rules":{
      "prefer-template": 0,
      "comma-dangle": 0,
      "func-names": 0,
      "prefer-arrow-callback": 0,
      "new-cap": 0,
      "no-param-reassign": 0,
      "no-use-before-define": 0,
      "indent": [0, 2],
      "max-len": ["warn", { "code": 140 }],
      "no-console": 1,
      "no-unused-vars": "warn",
      "consistent-return": 0,
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
    }
  };
