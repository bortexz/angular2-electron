# angular2-webpack-electron

[![Build Status](https://travis-ci.org/bertofer/angular2-webpack-electron.svg?branch=master)](https://travis-ci.org/bertofer/angular2-webpack-electron)
[![Dependency Status](https://david-dm.org/bertofer/angular2-webpack-electron.svg)](https://david-dm.org/bertofer/angular2-webpack-electron)
[![devDependency Status](https://david-dm.org/bertofer/angular2-webpack-electron/dev-status.svg)](https://david-dm.org/bertofer/angular2-webpack-electron#info=devDependencies)

Forked originally from https://github.com/preboot/angular2-webpack

This repository adds some customization on top of the original repository to make it appropiate for electron apps instead of normal webpages.
## Things to do yet
- [ ] Look for a reliable method to run the e2e tests automatically
- [ ] Add packaging/signing scripts to npm

## Added some necessary files for electron
- Added electron typings
- Added index.js to load on electron

## Scripts added/modified
This will run the build process and the application once.
```
npm run start
```
watch has been renamed to start-watch. The electron will start in livereload process. See [electron livereload below](#Electron-livereload)
```
npm run start-watch
```

##Electron livereload
Support for electron livereload with [electron-connect](https://www.npmjs.com/package/electron-connect) and [on-webpack-build](https://www.npmjs.com/package/on-build-webpack).
When running start-watch script, the electron instane is run from the electron-connect client instead of running "electron ."

This code has been added to webpack to run the electron
```
var electron = require('electron-connect').server.create();
...
var isWatching = ENV === 'start-watch'
...
  if (isWatching) {
    config.plugins.push(
      new WebpackOnBuildPlugin(function(stats) {
        if (!config.reload) {
          config.reload = true;
          electron.start();
        } else {
          electron.reload();
        }
      })
    );
  }

```

with this in the index.js, to run only when the npm lifecycle is start-watch
```
const livereload = require('electron-connect').client
...
const npm_lifecycle = process.env.npm_lifecycle_event
...
  if (npm_lifecycle === 'start-watch') {
    livereload.create(mainWindow)
  }

```


##Other
- Delete dependency and rules of development web servers.
