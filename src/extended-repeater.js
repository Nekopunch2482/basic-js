const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addition = options.addition === undefined ? "" : `${options.addition}`;
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const additionRepeatTimes = addition ? options.additionRepeatTimes || 1 : 0;
  const additionSeparator = options.additionSeparator || "|";

  return Array.from({ length: repeatTimes })
    .map(() => {
      const additionString = Array.from({ length: additionRepeatTimes })
        .map(() => {
          return addition;
        })
        .join(additionSeparator);

      return `${str}${additionString}`;
    })
    .join(separator);
}

module.exports = {
  repeater,
};
