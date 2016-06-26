'use strict'
let minimist = require('minimist')
let os = require('os')
let electronPackager = require('electron-packager')
let mkdirp = require('mkdirp')
let path = require('path')
let debug = require('debug')('angular2-webpack-electron:packager')

// Parse args
let args = minimist(process.argv.slice(2))

// Packager options
let platformToBuild = args['platform'] || 'all'
let archToBuild = args['arch'] || 'all'
let out = args['out'] || 'out/'
out = path.resolve(out)
let dir = './'
let overwrite = args['overwrite'] || true

// Supported platforms and archs
let supportedPlatforms = ['linux', 'win32', 'darwin', 'mas']
let supportedArchs = ['ia32', 'x64']

function build () {
  mkdirp(out, err => {
    if (err) {
      debug('Cannot get or create the otuput folder', err)
      return
    }

    let platform, arch
    if (platformToBuild === 'current') {
      let current
      try {
        current = detectCurrent()
      } catch (err) {
        debug(err)
        return
      }
      platform = current.platform
      arch = current.arch
    } else {
      platform = platformToBuild
      arch = archToBuild
    }
    let options = {
      platform,
      arch,
      out,
      dir,
      overwrite
    }
    debug(`Building for platform ${os.platform()} and arch ${os.arch()}. Output: ${out}`)
    electronPackager(options, (err, appPaths) => {
      if (err) debug('Some error occurred during building', err)
      else debug('Finished creating package')
    })
  })
}

function detectCurrent () {
  // detect OS and build specific
  let platform = os.platform()
  let arch = os.arch()
  if (supportedPlatforms.indexOf(platform) === -1 || supportedArchs.indexOf(arch) === -1) {
    throw new Error('Cannot build for this platform')
  }

  return {platform, arch}
}

build()
