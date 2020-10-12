const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!arr) {
    throw new Error('Not an Array');
  }

  let copyArr = arr.slice();
  let result = []

  if (!arr.length) {
    return [];
  }

  let count = 0;

  copyArr.forEach((item, index) => {
    if (item === '--discard-next') {
      if (copyArr[index + 2] !== '--discard-prev') {
        copyArr.splice(index + 1, 1);
      }
    } else if (item === '--discard-prev') {
      result.splice(result.length - 1, 1);
    } else if (item === '--double-next') {
      result.push(copyArr[index + 1]);
    } else if (item === '--double-prev') {
      if (result.length && copyArr[index - 1] !== '--discard-next') {
        result.splice(result.length - 1, 0, result[result.length - 1]);
      }
    } else {
      count++;
      result.push(item);
    }
  });

  if (count === arr.length) {
    return arr;
  }

  return result.filter(item => item !== undefined);
};