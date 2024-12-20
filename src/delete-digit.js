const { NotImplementedError } = require("../extensions/index.js");

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
  let max = 0;
  let left = n.toString().split("");
  let right = [];

  while (left.length > 0) {
    const buf = left.pop();
    const num = parseInt(left.join("") + right.join(""));
    max = Math.max(max, num);
    right.unshift(buf);
  }

  return max;
}

module.exports = {
  deleteDigit,
};
