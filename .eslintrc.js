module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  settings: {
    'import/resolver': {
      alias: [['~', './js/modules']]
    }
  },
  extends: '../.eslintrc.js'
};
