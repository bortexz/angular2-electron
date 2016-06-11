# angular2-webpack-electron

[![Build Status](https://travis-ci.org/bertofer/angular2-webpack-electron.svg?branch=master)](https://travis-ci.org/bertofer/angular2-webpack-electron)
[![Dependency Status](https://david-dm.org/bertofer/angular2-webpack-electron.svg)](https://david-dm.org/bertofer/angular2-webpack-electron)
[![devDependency Status](https://david-dm.org/bertofer/angular2-webpack-electron/dev-status.svg)](https://david-dm.org/bertofer/angular2-webpack-electron#info=devDependencies)

Forked from https://github.com/preboot/angular2-webpack

This repository adds some customization on top of the original repository to make it appropiate for electron apps instead of normal webpages.
## Things to do yet
- [] Look for a reliable method to run the e2e tests automatically
- [] Add packaging/signing scripts to npm

## Added some necessary files for electron
- Added electron typings
- Added index.js to load on electron

## Scripts added/modified
This will run the build process and the application once.
```
npm run start
```
With start-watch, the electron will start in livereload process. See [e2e testing below](#What-with-e2e-testing)
```
npm run start-watch
```

## What with e2e testing
I don't know yet any service to run e2e testing on a CI server. For now, the option locally would be to run the e2e with a build generated with protractor.
For this, a script needs to be written to run the electron-package only for current platform, having a switch in the protractor file to select this generated binary to run the e2e locally.

## Electron livereload
Support for electron livereload with [electron-connect](https://www.npmjs.com/package/electron-connect) and [on-webpack-build](https://www.npmjs.com/package/on-build-webpack).
When running start-watch script, the electron instane is run from the electron-connect client instead of running "electron ."

## Other
- Delete dependency and rules of development web servers.
