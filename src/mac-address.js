const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const groups = inputString.split('-');
  
  // Check if there are exactly six groups
  if (groups.length !== 6) {
    return false;
  }

  // Check each group to see if it contains exactly two hexadecimal characters
  const isValidHex = /^[0-9A-F]{2}$/;
  for (let group of groups) {
    if (!isValidHex.test(group)) {
      return false;
    }
  }

  return true;
}
module.exports = {
  isMAC48Address
};
