const { NotImplementedError } = require("../extensions/index.js");

const intoInfinityIter = (array) => {
  const iterator = (function* () {
    while (true) for (const item of array) yield item;
  })();

  return {
    next: () => iterator.next().value,
  };
};

const charToIndex = (char) =>
  char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);

const indexToChar = (index) =>
  String.fromCharCode((index % 26) + "A".charCodeAt(0));
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isReverse = !isDirect;
  }

  encrypt(plainText, key) {
    if (!plainText || !key) throw new Error("Incorrect arguments!");

    const keyIter = intoInfinityIter(key.split(""));

    const result = plainText.split("").map((char) => {
      if (!/[A-Za-z]/.test(char)) return char;

      const keyChar = keyIter.next();

      const plainIndex = charToIndex(char);
      const keyIndexShift = charToIndex(keyChar);

      const cipherIndex = (plainIndex + keyIndexShift) % 26;

      return indexToChar(cipherIndex);
    });

    this.isReverse && result.reverse();

    return result.join("");
  }
  decrypt(cipherText, key) {
    if (!cipherText || !key) throw new Error("Incorrect arguments!");

    const keyIter = intoInfinityIter(key.split(""));

    const result = cipherText.split("").map((char) => {
      if (!/[A-Za-z]/.test(char)) return char;

      const keyChar = keyIter.next();

      const cipherIndex = charToIndex(char);
      const keyIndexShift = charToIndex(keyChar);

      const plainIndex = (cipherIndex - keyIndexShift + 26) % 26;

      return indexToChar(plainIndex);
    });

    this.isReverse && result.reverse();

    return result.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
