const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minNumbersMoves = Math.pow(2, disksNumber) - 1;
  let timeSec = Math.floor(((minNumbersMoves / turnsSpeed) * 3600));
  
  return {turns: minNumbersMoves, seconds: timeSec};
};
// Math.ceil ????