
module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
      "ecmaVersion": 2017,
      "sourceType": "module"
  },
  "rules": {
      'no-console': 'off',
      "semi": 2,
      "no-alert": 'off',
      "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
  },
    "env": {
        "browser": true,
        "node": true
    },
    "globals":{
        node: false,
        "document": true,
        "localStorage": true,
        "window": true,
    }
};
