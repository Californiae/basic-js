const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const teamName = members
    .filter(member => typeof member === 'string') // Keep only strings
    .map(member => member.trim()[0].toUpperCase()) // Trim and get the first letter in uppercase
    .sort() // Sort alphabetically
    .join(''); // Join letters to form the name

  return teamName;
}

module.exports = {
  createDreamTeam
};
