// Author        : tarlansoltanov
// Title         : Event Emitter
// ID            : 2694
// URL           : https://leetcode.com/problems/event-emitter/
// Difficulty    : Medium
// Language      : TypeScript


type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  subs: Object = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    this.subs[eventName] === undefined ? (this.subs[eventName] = [callback]) : this.subs[eventName].push(callback);
    const index: number = this.subs[eventName].length - 1;
    return {
      unsubscribe: () => {
        this.subs[eventName].length === 1 ? delete this.subs[eventName] : this.subs[eventName].splice(index, 1);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    return this.subs[eventName] === undefined ? [] : this.subs[eventName].map((fn) => fn(...args));
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
