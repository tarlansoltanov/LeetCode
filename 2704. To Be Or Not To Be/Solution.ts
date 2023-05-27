// Author        : tarlansoltanov
// Title         : To Be Or Not To Be
// ID            : 2704
// URL           : https://leetcode.com/problems/to-be-or-not-to-be/
// Difficulty    : Easy
// Language      : TypeScript


type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
const item = val;
return {
  toBe: (val: any) => { if(item === val) { return true } else { throw new Error("Not Equal") }},
  notToBe: (val: any) => { if(item !== val) { return true } else { throw new Error("Equal") }}
};
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/