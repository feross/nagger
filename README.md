# nagger [![npm](https://img.shields.io/npm/v/nagger.svg)](https://npmjs.org/package/nagger)

### Force the user to run the latest version of node.js (thru nagging)

## install

```
npm install nagger
```

## usage

```js
// Are we running the latest version of Node?
require('nagger')
```

Prints out to the terminal:

```
===================================================
 WARNING: Installed Node version is out-of-date!
 (Current: 0.10.14 Latest: 0.10.15)
===================================================
```

That's it!

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).