'use strict';

var assert = require('assert');
var toArray = require('..');

describe('test', function() {
  it('should only allow object', function() {
    var shouldThrowError1 = false;
    var shouldThrowError2 = false;
    var shouldThrowError3 = false;
    var shouldThrowError4 = false;
    var shouldThrowError5 = false;
    try {
      toArray(1);
    } catch(e) {
      shouldThrowError1 = true;
    }
    try {
      toArray(true);
    } catch(e) {
      shouldThrowError2 = true;
    }
    try {
      toArray('1');
    } catch(e) {
      shouldThrowError3 = true;
    }
    try {
      toArray(null);
    } catch(e) {
      shouldThrowError4 = true;
    }
    try {
      toArray(undefined);
    } catch(e) {
      shouldThrowError5 = true;
    }
    assert.equal(shouldThrowError1, true);
    assert.equal(shouldThrowError2, true);
    assert.equal(shouldThrowError3, true);
    assert.equal(shouldThrowError4, true);
    assert.equal(shouldThrowError5, true);
  });

  it('should return when obj is array', function() {
    var arr = [1];
    var returnArr = toArray(arr);
    assert.strictEqual(arr, returnArr);
  });

  it('should get expected result', function() {
    var obj = { key1: 'value1', key2: 1 };
    var arr = toArray(obj);
    assert.equal(arr.length, 2);
    assert.equal(arr[0][0], 'key1');
    assert.equal(arr[0][1], 'value1');
    assert.equal(arr[1][0], 'key2');
    assert.equal(arr[1][1], 1);
  });

  it('should support opts.excepts', function() {
    var obj = { key1: 'value1', key2: 1 };
    var arr = toArray(obj, { excepts: ['key2'] });
    assert.equal(arr.length, 1);
    assert.equal(arr[0][0], 'key1');
    assert.equal(arr[0][1], 'value1');
  });
});
