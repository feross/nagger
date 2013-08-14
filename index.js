var request = require('request')

/**
 * Detect if the installed Node version is the latest version. Warn if the
 * installed Node is not the latest.
 */

var url = 'http://nodejs.org/dist/latest/SHASUMS.txt'
var current = process.versions.node

request.get(url, function (err, res, body) {
  if (err) {
    console.error('Nagger cannot connect to nodejs.org to get latest version.')
  } else {
    var latest = /node-v(\d+\.\d+\.\d+)/.exec(body)
    if (latest) {
      if (latest[1] !== current) {
        console.log('===================================================')
        console.log(' WARNING: Installed Node version is out-of-date!   ')
        console.log(' (Current: ' + current + ' Latest: ' + latest + ') ')
        console.log('===================================================')
      }
    } else {
      console.log('Nagger got unexpected response from nodejs.org. Are you on free wifi? Try logging in.')
    }
  }
})