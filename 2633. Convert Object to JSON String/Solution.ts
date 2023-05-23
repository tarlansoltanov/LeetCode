// Author        : tarlansoltanov
// Title         : Convert Object to JSON String
// ID            : 2633
// URL           : https://leetcode.com/problems/convert-object-to-json-string/
// Difficulty    : Medium
// Language      : TypeScript

function jsonStringify(object: any): string {
  if (object === null) return 'null';
  if (typeof object === 'string') return `"${object}"`;

  if (Array.isArray(object)) {
    const res = object.map((item) => jsonStringify(item));
    return `[${res.join(',')}]`;
  }

  if (typeof object === 'object') {
    const res = Object.keys(object).map((key) => `${jsonStringify(key)}:${jsonStringify(object[key])}`);
    return `{${res.join(',')}}`;
  }

  return String(object);
}
