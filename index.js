var concat = require('concat-stream')
var http = require('http')

/**
 * Detect if the installed Node version is the latest version. Warn if the
 * installed Node is not the latest.
 */

var url = 'http://nodejs.org/dist/latest/SHASUMS.txt'
var current = process.versions.node

http.get(url)
  .pipe(concat(function (data) {
    var latest = /node-v(\d+\.\d+\.\d+)/.exec(data)
    if (latest) {
      if (latest[1] !== current) {
        console.log('===================================================')
        console.log(' WARNING: Installed Node version is out-of-date!   ')
        console.log(' (Current: ' + current + ' Latest: ' + latest + ') ')
        console.log('===================================================')
      }
    } else {
      console.log('Nagger: unexpected response from nodejs.org. Are you on free wifi?')
    }
  }))
  .on('error', function (err) {
    console.error('Nagger cannot connect to nodejs.org to get latest version.')
    console.error(err)
  })