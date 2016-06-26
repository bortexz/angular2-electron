// let os = require('os')
// let platform = os.platform()
// let arch = os.arch()
// let chromeBinary
// if (platform === 'darwin') {
//   chromeBinary = `./out/App-darwin-${arch}/App.app/Contents/MacOS/App`
// }
// if (platform === 'linux') {
//   chromeBinary = `./out/App-linux-${arch}/App`
// }

exports.config = {
  // baseUrl: 'http://localhost:8080/',

  specs: [
    'src/**/*.e2e-spec.js'
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
       //binary: `./out/App-darwin-${'x64'}/App.app/Contents/MacOS/App`
      //binary: chromeBinary
      binary: `./out/App-linux-x64/App`
    }
  },

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

    // browser.ignoreSynchronization = true;
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true
};
