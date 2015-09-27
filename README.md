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
