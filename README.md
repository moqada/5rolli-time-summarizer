# 5rolli-time-summarizer

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download-image]][npm-download-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![License][license-image]][license-url]

Summarize time records for [5ROLLI](https://github.com/tongariboyz/5rolli/).


## Installation

```
npm install --save 5rolli-time-summarizer
```


## Usage

```javascript
import summarizer from '5rolli-time-summarizer';

const times = [
  {es50: 60, es90: 200, spent: 100},
  {es50: 120, es90: 300, spent: undefined},
  {es50: 15, es90: 45, spent: undefined},
  {es50: 60, es90: 200, spent: 300}
];
const summary = summarizer(times);
console.log(summary);
// {
//   buffer: 72500,
//   es: 524,
//   es50: 255,
//   es90: 745,
//   spent: 400
// }
```

[npm-url]: https://www.npmjs.com/package/5rolli-time-summarizer
[npm-image]: https://img.shields.io/npm/v/5rolli-time-summarizer.svg?style=flat-square
[npm-download-url]: https://www.npmjs.com/package/5rolli-time-summarizer
[npm-download-image]: https://img.shields.io/npm/dt/5rolli-time-summarizer.svg?style=flat-square
[travis-url]: https://travis-ci.org/moqada/5rolli-time-summarizer
[travis-image]: https://img.shields.io/travis/moqada/5rolli-time-summarizer.svg?style=flat-square
[daviddm-url]: https://david-dm.org/moqada/5rolli-time-summarizer
[daviddm-image]: https://img.shields.io/david/moqada/5rolli-time-summarizer.svg?style=flat-square
[daviddm-dev-url]: https://david-dm.org/moqada/5rolli-time-summarizer#info=devDependencies
[daviddm-dev-image]: https://img.shields.io/david/dev/moqada/5rolli-time-summarizer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/moqada/5rolli-time-summarizer
[codecov-image]: https://img.shields.io/codecov/c/github/moqada/5rolli-time-summarizer.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/5rolli-time-summarizer.svg?style=flat-square
