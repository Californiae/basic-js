const { NotImplementedError } = require('../extensions/index.js');

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
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];

      if (alphabet.includes(messageChar)) {
        const messageCharIndex = alphabet.indexOf(messageChar);
        const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
        const encryptedCharIndex = (messageCharIndex + keyCharIndex) % 26;
        result += alphabet[encryptedCharIndex];
        keyIndex++;
      } else {
        result += messageChar; // Keep non-alphabetic characters as is
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];

      if (alphabet.includes(encryptedChar)) {
        const encryptedCharIndex = alphabet.indexOf(encryptedChar);
        const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
        const decryptedCharIndex = (encryptedCharIndex - keyCharIndex + 26) % 26;
        result += alphabet[decryptedCharIndex];
        keyIndex++;
      } else {
        result += encryptedChar; // Keep non-alphabetic characters as is
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
