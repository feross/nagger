/*! nagger. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

var boxen = require('boxen')
var get = require('simple-get')
var chalk = require('chalk')

var url = 'http://nodejs.org/dist/latest/SHASUMS256.txt'
var currentVersion = process.versions.node

function nagger () {
  get.concat(url, function (err, res, body) {
    if (err) {
      console.log(chalk.red.bold('\n Nagger couldn\'t connect to nodejs.org to get the latest version.\n'))
      console.error(err)
      process.exitCode = 1
      return
    }

    var latestVersion = /node-v(\d+\.\d+\.\d+)/.exec(body)
    latestVersion = latestVersion && latestVersion[1]

    var currentMessage = chalk.green.bold(` Current : ${currentVersion}`)
    var latestMessage = chalk.cyan.bold(` Latest : ${latestVersion}`)

    if (latestVersion !== currentVersion) {
      console.log(chalk.red.bold(boxen(chalk.red.bold(
        ` WARNING: Installed Node version is out-of-date \n\n${currentMessage}                ${latestMessage}`
      ))))
    }
  })
}

module.exports = nagger
