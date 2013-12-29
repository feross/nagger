#!/usr/bin/env node

var http = require('http')

/**
 * Detect if the installed Node version is the latest version. Warn if the
 * installed Node is not the latest.
 */

var url = 'http://nodejs.org/dist/latest/SHASUMS.txt'
var current = process.versions.node

http.get(url, function (res) {
  var body = ''
  res.on('data', function (chunk) {
    body += chunk
  })
  res.on('end', function () {
    var latest = /node-v(\d+\.\d+\.\d+)/.exec(body)
    latest = latest && latest[1]
    if (latest) {
      if (latest !== current) {
        console.log('===================================================')
        console.log(' WARNING: Installed Node version is out-of-date!   ')
        console.log(' (Current: ' + current + ' Latest: ' + latest + ') ')
        console.log('===================================================')
      }
    } else {
      console.log('Nagger: unexpected response from nodejs.org. Are you on free wifi?')
    }
  })
})
.on('error', function (err) {
  console.error('Nagger cannot connect to nodejs.org to get latest version.')
  console.error(err)
})