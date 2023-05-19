// Author        : tarlansoltanov
// Title         : Filter Elements from Array
// ID            : 2634
// URL           : https://leetcode.com/problems/filter-elements-from-array/
// Difficulty    : Easy
// Language      : TypeScript


function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const newArray: number[] = [];
    for(let i: number= 0; i < arr.length; i++){
        if(fn(arr[i], i)) newArray.push(arr[i]);
    }
    return newArray;
};