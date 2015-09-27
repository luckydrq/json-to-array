# json-to-array
Convert object to array

## Example
```js
var toArray = require('json-to-array');
console.log(toArray({ name: 'luckydrq', age: 30 })); // [[name, 'luckydrq'], [age, 30]]
```

## Real world Usage
- You can change `object` to `ES6 Map`:
```js
var obj = { a: 1 };
var es6Map = new Map(toArray(obj));
```

## LISENCE
MIT

[npm-image]: https://img.shields.io/npm/v/json-to-array.svg?style=flat-square
[npm-url]: https://npmjs.org/package/json-to-array
[travis-image]: https://img.shields.io/travis/luckydrq/json-to-array/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckydrq/json-to-array
[coveralls-image]: https://img.shields.io/coveralls/luckydrq/json-to-array/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/luckydrq/json-to-array?branch=master
