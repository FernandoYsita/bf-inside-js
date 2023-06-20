'use strict';
console.log('-- begin --');

/**
 * Scrambles the input values and returns them in a specific order.
 * @param {...any} values - The values to be scrambled.
 * @returns {string} The scrambled values concatenated as a string.
 */
const scramble = (...values) => {
  const scrambledValues = [...values].sort();
  return scrambledValues.join('');
};

const _1_expect = 'xyz';
const _1_actual = scramble('x', 'z', 'y');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'xyz';
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'xyz';
const _3_actual = scramble('z', 'x', 'y');
console.assert(_3_actual === _3_expect, 'Test 3');

console.log('-- end --');

console.log('-- end --');
