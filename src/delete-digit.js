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
  let arr = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
      let newStr = n;
      newStr = newStr.slice(0, i) + newStr.slice(i+1);
      arr.push(+newStr);
      }
  return Math.max.apply(null, arr)
}

module.exports = {
  deleteDigit
};
