const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        // If not at the last element, double the next element
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        // If not at the first element and previous wasn't discarded, double the previous element
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;

      case '--discard-next':
        // Skip the next element
        i++; // Increment i to skip the next value
        break;

      case '--discard-prev':
        // If not at the first element and previous wasn't discarded, remove the previous element
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;

      default:
        // Add normal elements to the result
        result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
