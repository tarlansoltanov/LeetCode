// Author        : tarlansoltanov
// Title         : Interval Cancellation
// ID            : 2725
// URL           : https://leetcode.com/problems/interval-cancellation/
// Difficulty    : Easy
// Language      : TypeScript


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args);

  const timer = setInterval(() => {
    fn(...args);
  }, t);

  return () => {
    clearInterval(timer);
  };
}
