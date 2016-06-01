# nagger 

[![npm](https://img.shields.io/npm/v/nagger.svg)](https://npmjs.org/package/nagger) [![Build Status](https://travis-ci.org/CodeDotJS/nagger.svg?branch=master)](https://travis-ci.org/CodeDotJS/nagger)

> Force the user to run the latest version of node.js (thru nagging)

## Install

```
$ npm install nagger
```

__Install nagger globally :__

```
$ sudo npm install --global nagger
```
__or__
```
$ npm install --global nagger
```

## Usage

```
$ nagger
```
__OR__

```js
// Are we running the latest version of Node?
require('nagger');
```

__Prints out to the terminal :__

```
┌────────────────────────────────────────────────┐
│ WARNING: Installed Node version is out-of-date │
│                                                │
│ Current : 5.5.0                 Latest : 6.2.0 │
└────────────────────────────────────────────────┘
```

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).