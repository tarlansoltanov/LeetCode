// Author        : tarlansoltanov
// Title         : Call Function with Custom Context
// ID            : 2693
// URL           : https://leetcode.com/problems/call-function-with-custom-context/
// Difficulty    : Medium
// Language      : TypeScript


declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

Function.prototype.callPolyfill = function (context, ...args): any {
  return this.bind(context)(...args);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
