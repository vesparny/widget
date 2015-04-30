'use strict';

export default function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  // Test for A's keys different from B.
  let hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i]) ||
        objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
    let valA = objA[keysA[i]];
    let valB = objB[keysA[i]];

    if (valA !== valB) {
      return false;
    }
  }
  return true;
}
