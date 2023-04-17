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
function isMAC48Address(n) {
  let arr = n.split('-');
  let sum = 0;
  for (let group of arr) {
    let newGroup = group.split('');
    for (let i of newGroup)  {
      if (i === '1' || i === '2' || i === '3' || i === '4' || i === '5' || i === '6' || i === '7' || i === '8' || i === '9' || i === '0' || i === 'A' || i === 'B' || i === 'C' || i === 'D' || i === 'E' || i === 'F') {
        sum++;
      }
    }
  }
  if (sum === 12) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isMAC48Address
};
