const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const array = [];
    let keyStage = -1;
    for (let i = 0; i < message.length; i++) {
      if (abc.indexOf(message[i].toUpperCase()) > -1) {
        keyStage++;
        let number = (abc.indexOf(message[i].toUpperCase()) + abc.indexOf(key[keyStage % key.length].toUpperCase())) % abc.length;
        array.push(abc[number]);
      } else {
        array.push(message[i])
      }
    }
    return this.direct ? array.join('') : array.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const array = [];
    let keyStage = -1;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (abc.indexOf(encryptedMessage[i].toUpperCase()) > -1) {
        keyStage++;
        let number = (abc.indexOf(encryptedMessage[i].toUpperCase()) + abc.length - abc.indexOf(key[keyStage % key.length].toUpperCase())) % abc.length;
        array.push(abc[number])
      } else {
        array.push(encryptedMessage[i])
      }
    }
    return this.direct ? array.join('') : array.reverse().join('');
  }
}


module.exports = VigenereCipheringMachine;
