const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {   
      // Base case: if the element is not an array, return 1
      if (!Array.isArray(arr)) {
        return 0;
      }
  
      // Initialize depth
      let depth = 1;
  
      // Loop through each element and calculate the depth recursively
      for (let i = 0; i < arr.length; i++) {
        // Find the maximum depth among the elements
        const currentDepth = this.calculateDepth(arr[i]);
        depth = Math.max(depth, currentDepth + 1);
      }
  
      return depth;
    }
  }

module.exports = {
  DepthCalculator
};
