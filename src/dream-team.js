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
  if (!Array.isArray(members)) return false;
  let stringsArr = [];
  let stringsArrWithoutSpaces = [];
  let result = '';
  members.forEach((name) => {
    if (typeof name === 'string') {
      stringsArr.push(name.toUpperCase())
    }
  })

  stringsArr.forEach((name) => {
      while (name[0] === ' ') {
          name = name.slice(1);
      }
      stringsArrWithoutSpaces.push(name)

  })
  stringsArrWithoutSpaces = stringsArrWithoutSpaces.sort();

  console.log(stringsArrWithoutSpaces)

  stringsArrWithoutSpaces.forEach((name) => {
      result += name.slice(0, 1)
  })
  return result
}

module.exports = {
  createDreamTeam
};
