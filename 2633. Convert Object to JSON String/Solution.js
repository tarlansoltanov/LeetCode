// Author        : tarlansoltanov
// Title         : Convert Object to JSON String
// ID            : 2633
// URL           : https://leetcode.com/problems/convert-object-to-json-string/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object == null) return "null";
  if (typeof object === 'string') return '\"' + String(object) + '\"';

  if (Array.isArray(object)) {
    object = object.map((item) => jsonStringify(item));
    return `[${object.join(',')}]`;
  }

  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const res = keys.map((key) => `${jsonStringify(key)}:${jsonStringify(object[key])}`);
    return `{${res.join(',')}}`;
  }

  return String(object);
};