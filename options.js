const { name, version } = require('./package.json');

const OPTIONS = {
  BREAKPOINTS: {
    OLD_MOBILE: 320,
    MOBILE: 767,
    SMALL_TABLET: 600,
    TABLET: 979,
    SMALL_DESKTOP: 1440
  },
  HOST: 'http://localhost:9000',
  PATH: '/',
  CSS_NANO_PRESET: process.env.NODE_ENV === 'production' ? 'advanced' : 'lite',
  NAME: name,
  VERSION: version
};

module.exports = OPTIONS;
