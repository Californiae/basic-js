const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('');
  let maxNumber = 0;

  for (let i = 0; i < digits.length; i++) {
    const modifiedDigits = digits.slice(0, i).concat(digits.slice(i + 1));
    const number = parseInt(modifiedDigits.join(''), 10);
    maxNumber = Math.max(maxNumber, number);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
