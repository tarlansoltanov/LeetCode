// Author        : tarlansoltanov
// Title         : Generate Fibonacci Sequence
// ID            : 2648
// URL           : https://leetcode.com/problems/generate-fibonacci-sequence/
// Difficulty    : Easy
// Language      : TypeScript


function* fibGenerator(): Generator<number, any, number> {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
