// Author        : tarlansoltanov
// Title         : Compact Object
// ID            : 2705
// URL           : https://leetcode.com/problems/compact-object/
// Difficulty    : Medium
// Language      : TypeScript


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue> | JSONValue;

function compactObject(obj: Obj): Obj {
  if (!Boolean(obj)) return null;
  if (typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    const res = [];

    for (let key = 0; key < obj.length; key++) {
      const t = compactObject(obj[key]);
      if (Boolean(t)) res.push(t);
    }

    return res;
  }

  const res = {};

  Object.keys(obj).forEach((key) => {
    let t = compactObject(obj[key]);
    if (Boolean(t)) res[key] = t;
  });

  return res;
}
