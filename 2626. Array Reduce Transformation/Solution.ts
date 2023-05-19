// Author        : tarlansoltanov
// Title         : Array Reduce Transformation
// ID            : 2626
// URL           : https://leetcode.com/problems/array-reduce-transformation/
// Difficulty    : Easy
// Language      : TypeScript


type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let val: number = init;
    for(let i: number = 0; i < nums.length; i++){
        val = fn(val, nums[i]);
    }
    return val;
};