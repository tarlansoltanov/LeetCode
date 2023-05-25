// Author        : tarlansoltanov
// Title         : Array of Objects to Matrix
// ID            : 2675
// URL           : https://leetcode.com/problems/array-of-objects-to-matrix/
// Difficulty    : Medium
// Language      : TypeScript


function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
  const isObject = (obj: any): boolean => { return typeof obj === 'object' && obj !== null; };

  const getKeys = (obj) => {
    if(!isObject(obj)) return [''];
    const res: (string | number | boolean | null)[] = [];
    for(const key of Object.keys(obj)){
      const childKeys = getKeys(obj[key]);
      for(const cKey of childKeys){
        res.push(cKey ? `${key}.${cKey}` : key);
      }
    }
    return res;
  };

  const getValue = (obj, key) => {
    const path = key.split('.');
    
    return isObject(obj) ? !key.includes('.') ? (obj[key] === undefined || isObject(obj[key]) ? "" : obj[key]) : getValue(obj[path[0]], path.slice(1).join('.')) : "";
  };

  const keySet: Set<string | number | boolean | null> = new Set();
  arr.forEach(item => getKeys(item).forEach(k => keySet.add(k)));
  const keys: (string | number | boolean | null)[] = Array.from(keySet).sort();

  const res: (string | number | boolean | null)[][] = [keys];
  arr.forEach(item => res.push(keys.map(k => getValue(item, k))));

  return res;
};