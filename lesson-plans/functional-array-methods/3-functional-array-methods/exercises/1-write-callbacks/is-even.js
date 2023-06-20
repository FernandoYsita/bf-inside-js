/**
 * Returns true if a number is even, otherwise returns false.
 * @param {number} num - The number to check.
 * @returns {boolean} - Whether the number is even.
 */
export const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
