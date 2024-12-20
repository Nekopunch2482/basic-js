const { NotImplementedError } = require("../extensions/index.js");

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
    const maxLen = arr
      .filter((item) => Array.isArray(item))
      .map((next) => this.calculateDepth(next))
      .sort((a, b) => a - b)
      .pop();

    return (maxLen && maxLen + 1) || 1;
  }
}

module.exports = {
  DepthCalculator,
};
