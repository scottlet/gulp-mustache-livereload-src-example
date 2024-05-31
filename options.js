/* Use this to override any of the options in CONSTS.js inside the builder repo.
Should probably not be necessary except for name and version */
const OPTIONS = {
    NAME: 'Mustache Source', // change to name of your project - remove to use name in package.json (recommended)
    VERSION: '0.0.1', // increment with each release - remove to use version in package.json (recommended)
    BREAKPOINTS: {
        OLD_MOBILE: 320,
        MOBILE: 767,
        SMALL_TABLET: 600,
        TABLET: 979,
        SMALL_DESKTOP: 1440
    }
};

module.exports = OPTIONS;
