// Author        : tarlansoltanov
// Title         : Event Emitter
// ID            : 2694
// URL           : https://leetcode.com/problems/event-emitter/
// Difficulty    : Medium
// Language      : JavaScript


class EventEmitter {
  constructor() {
    this.subs = {};
  }

  subscribe(event, cb) {
    this.subs[event] === undefined ? this.subs[event] = [cb] : this.subs[event].push(cb);
    let index = this.subs[event].length - 1;
    return {
      unsubscribe: () => {
        console.log(this.subs[event]);
        this.subs[event].length === 1 ? delete this.subs[event] : delete this.subs[event].splice(index, 1);
        console.log(this.subs[event]);
      }
    };
  }

  emit(event, args = []) {
    return this.subs[event] === undefined ? [] : this.subs[event].map(cb => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */