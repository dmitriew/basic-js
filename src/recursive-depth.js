const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  let depth = 1;
  let searchDepth = 1;
        arr.forEach(item => {
    if (Array.isArray(item)) {
      searchDepth += this.calculateDepth(item);
    }
    depth = Math.max(depth, searchDepth);
    searchDepth = 1;
  });
  return depth;
}
};

