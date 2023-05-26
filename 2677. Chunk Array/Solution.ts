// Author        : tarlansoltanov
// Title         : Chunk Array
// ID            : 2677
// URL           : https://leetcode.com/problems/chunk-array/
// Difficulty    : Easy
// Language      : TypeScript


function chunk(arr: any[], size: number): any[][] {
  const res: any[][] = [];

  for(let i = 0; i < arr.length; i += size){
    res.push(arr.slice(i, i + size));
  }

  return res;
};