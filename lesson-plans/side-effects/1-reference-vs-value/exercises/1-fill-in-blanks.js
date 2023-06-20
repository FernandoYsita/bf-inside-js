const deepCompare = (actual, expected) =>
  actual === expected ||
  Object.is(actual, expected) ||
  (Object(actual) === actual &&
    Object(expected) === expected &&
    Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    expected.every((exp, index) => deepCompare(actual[index], exp))) ||
  (Object.keys(actual).length === Object.keys(expected).length &&
    Object.keys(expected).every((key) =>
      deepCompare(actual[key], expected[key]),
    ));

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

const test1 = deepCompare(array1, array2);
console.assert(test1, 'Test 1'); // This will pass as the contents of the arrays are the same.

const test2 = deepCompare(array1, [1, 2, 3]);
console.assert(test2, 'Test 2'); // This will pass as the contents of the arrays are the same.
