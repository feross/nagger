# nagger [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/nagger/master.svg
[travis-url]: https://travis-ci.org/feross/nagger
[npm-image]: https://img.shields.io/npm/v/nagger.svg
[npm-url]: https://npmjs.org/package/nagger
[downloads-image]: https://img.shields.io/npm/dm/nagger.svg
[downloads-url]: https://npmjs.org/package/nagger
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Force the user to run the latest version of node.js (thru nagging)

## Install

```
$ npm install nagger
```

__Install nagger globally :__

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
require('nagger')
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
