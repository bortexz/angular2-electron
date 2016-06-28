'use strict'
let os = require('os')
let platform = os.platform()
let arch = os.arch()
let electronBinary
switch (platform) {
  case 'darwin':
    electronBinary = `./out/App-darwin-${arch}/App.app/Contents/MacOS/App`
    break
  case 'linux':
    electronBinary = `./out/App-linux-${arch}/App`
    break
  case 'win32':
    electronBinary = `./out/App-linux-${arch}/App.exe`
    break
}

exports.config = (function () {
  console.log(platform)
  return {
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
        binary: electronBinary
      }
    },

    onPrepare: function () {
      var SpecReporter = require('jasmine-spec-reporter')
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}))

    // browser.ignoreSynchronization = true
    },

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
    useAllAngular2AppRoots: true
  }
}())
