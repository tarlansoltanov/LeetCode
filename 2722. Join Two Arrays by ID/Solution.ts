// Author        : tarlansoltanov
// Title         : Join Two Arrays by ID
// ID            : 2722
// URL           : https://leetcode.com/problems/join-two-arrays-by-id/
// Difficulty    : Medium
// Language      : TypeScript


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function join(arr1: JSONValue[], arr2: JSONValue[]): JSONValue[] {
  const res = {};

  arr1.forEach((e: JSONValue) => {
    res[e["id"]] = e;
  });

  arr2.forEach((e: JSONValue) => {
    if (res[e["id"]]) {
      Object.keys(e).forEach((key: string) => {
        res[e["id"]][key] = e[key];
      });
    } else {
      res[e["id"]] = e;
    }
  });

  return Object.values(res);
}
