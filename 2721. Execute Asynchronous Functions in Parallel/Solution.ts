// Author        : tarlansoltanov
// Title         : Execute Asynchronous Functions in Parallel
// ID            : 2721
// URL           : https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
// Difficulty    : Medium
// Language      : TypeScript


type Fn<T> = () => Promise<T>;

async function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    if (functions.length == 0) {
      resolve([]);
      return;
    }

    const res = new Array(functions.length).fill(null);

    let count = 0;

    functions.forEach(async (e, index) => {
      await e()
        .then((result) => (res[index] = result))
        .catch((err) => reject(err));
      count++;
      if (count == functions.length) resolve(res);
    });
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
