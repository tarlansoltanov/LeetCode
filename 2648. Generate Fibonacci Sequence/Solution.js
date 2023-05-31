// Author        : tarlansoltanov
// Title         : Generate Fibonacci Sequence
// ID            : 2648
// URL           : https://leetcode.com/problems/generate-fibonacci-sequence/
// Difficulty    : Easy
// Language      : JavaScript


/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let [a, b] = [0, 1];

  while(true){
    yield a;
    [a, b] = [b, a + b];
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/