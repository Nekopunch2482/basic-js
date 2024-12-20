const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const resultArr = [];

  str.split("").forEach((char) => {
    let next = resultArr.pop();

    if (!next) {
      resultArr.push([1, char]);
    } else {
      const [count, value] = next;

      if (value === char) {
        resultArr.push([count + 1, value]);
      } else {
        resultArr.push([count, value]);
        resultArr.push([1, char]);
      }
    }
  });

  const resultString = resultArr
    .map((item) => {
      const [count, value] = item;
      const countStr = count === 1 ? "" : count;
      return `${countStr}${value}`;
    })
    .join("");

  return resultString;
}

module.exports = {
  encodeLine,
};
