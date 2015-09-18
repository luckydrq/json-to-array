'use strict';

var assert = require('assert');

module.exports = function(obj, opts) {
  assert.equal(typeof obj, 'object');

  if (Array.isArray(obj)) return obj;

  opts = opts || {};
  var excepts = opts.excepts || [];
  if (!Array.isArray(excepts)) excepts = [excepts];

  var arr = [];
  Object.keys(obj).forEach(function(key) {
    if (~excepts.indexOf(key)) return;

    arr.push([key, obj[key]]);
  });
  return arr;
};
