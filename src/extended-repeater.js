const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  let memory = [];
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'} = options;

  if (addition !== undefined) {
    if (addition === null) {
      addition = 'null';
    }
    for (let j = 0; j < additionRepeatTimes; j++) {
      memory.push(addition);
    }
    memory = memory.join(additionSeparator);
  }

  for(let i = 0; i < repeatTimes; i++) {
    result.push(str + memory);
  }

  result = result.join(separator);
  return result;
};

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
// // 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
