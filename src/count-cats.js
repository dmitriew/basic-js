const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let ears = 0;
  backyard.forEach(function(item) {
    item.forEach(function(i) {
      if (i === '^^') {
        ears = ears + 1;
      }
    });
  });
  return ears;
};