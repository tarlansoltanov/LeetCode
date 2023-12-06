// Author        : tarlansoltanov
// Title         : Join Two Arrays by ID
// ID            : 2722
// URL           : https://leetcode.com/problems/join-two-arrays-by-id/
// Difficulty    : Medium
// Language      : JavaScript


/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  arr1 = arr1.sort((a, b) => a.id < b.id ? -1 : 1);
  arr2 = arr2.sort((a, b) => a.id < b.id ? -1 : 1);

  const joinedArray = arr1;
  let k = 0;
  arr2.forEach((e, i) => {
    while (k < joinedArray.length && joinedArray[k].id < e.id) k++;

    if (k == joinedArray.length) {
      joinedArray.push(e);
    } else if (joinedArray[k].id === e.id) {
      Object.keys(e).forEach((key) => joinedArray[k][key] = e[key]);
    } else {
      joinedArray.splice(k, 0, e);
    }
  })

  return joinedArray;
};