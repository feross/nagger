var cp = require('child_process')
var test = require('tape')

test('sanity check', function (t) {
  cp.execFile('./index.js', {
    cwd: __dirname
  }, (err, stdout) => {
    t.error(err)
    t.end()
  })
})
