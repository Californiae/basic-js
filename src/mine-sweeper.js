const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Initialize the result matrix with zeros
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  
  // Directions for the neighboring cells (up, down, left, right, and diagonals)
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1], // vertical and horizontal neighbors
    [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonal neighbors
  ];
  
  // Iterate over the matrix to populate the result matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If there's a mine, mark it as -1 or leave it as a mine in the result
      if (matrix[i][j] === true) {
        result[i][j] = -1;
        
        // Increment the neighboring cells' mine counts
        directions.forEach(([dx, dy]) => {
          const ni = i + dx;
          const nj = j + dy;
          
          // Check if the neighbor is within bounds
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && result[ni][nj] !== -1) {
            result[ni][nj]++;
          }
        });
      }
    }
  }
  
  // Replace -1 with the number of mines in the corresponding cells
  return result.map(row => row.map(cell => (cell === -1 ? 1 : cell)));
}

module.exports = {
  minesweeper
};
