// Author        : tarlansoltanov
// Title         : Apply Transform Over Each Element in Array
// ID            : 2635
// URL           : https://leetcode.com/problems/apply-transform-over-each-element-in-array/
// Difficulty    : Easy
// Language      : TypeScript


function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArray: number[] = [];
    for(let i: number = 0; i < arr.length; i++){
        newArray.push(fn(arr[i], i));
    }
    return newArray;
};