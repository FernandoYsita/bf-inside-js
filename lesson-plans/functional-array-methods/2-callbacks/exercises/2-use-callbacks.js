'use strict';

// --- declare callbacks ---

const isGreaterThanFive = (x = 0) => {
  return x > 5;
};

const isEven = (x = 0) => {
  return x % 2 === 0;
};

const checkThem = (x, y, callback) => {
  const isXValid = callback(x);
  const isYValid = callback(y);

  if (isXValid && isYValid) {
    return 'both';
  } else if (isXValid || isYValid) {
    return 'one';
  } else {
    return 'neither';
  }
};

// --- test cases ---

const check2 = checkThem(2, 4, isGreaterThanFive);
console.assert(check2 === 'neither', 'Test 2');

const check3 = checkThem(1, 2, isGreaterThanFive);
console.assert(check3 === 'neither', 'Test 3');

const check4 = checkThem(1, 5, isEven);
console.assert(check4 === 'neither', 'Test 4');

const check5 = checkThem(8, 5, isEven);
console.assert(check5 === 'one', 'Test 5');
