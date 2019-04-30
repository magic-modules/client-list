## @magic-modules/client-list
this is the [@magic-modules](https://github.com/magic-modules/)
ClientList component.
It provides a list with descriptions and links for all @magic-client libraries.

[html docs](https://magic-modules.github.io/client-list/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/client-list.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/client-list
[travis-image]: https://api.travis-ci.org/magic-modules/client-list.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/client-list
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/client-list/master.svg
[appveyor-url]: https://ci.appveyor.com/project/jaeh/core/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/client-list/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/client-list
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/client-list.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/client-list.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/client-list/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/client-list

#### install:
```bash
npm install --save-exact @magic-modules/client-list
```

#### usage:

##### import:
```javascript
// assets/index.js:


module.exports = {
  //... other entries
  ClientList = require('@magic-modules/client-list'),
}
```

##### use tag
```javascript
// in any component view
const component = {
  View: () => div([ClientList]),
}
```

thats it.
