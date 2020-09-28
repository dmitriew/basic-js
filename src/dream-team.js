const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    let teamNames = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        teamNames.push(members[i].trim());
      };
    };

    let dreamTeam = teamNames.map(word => word[0].toUpperCase())
    .sort()
    .join('');
    return dreamTeam.toUpperCase(); 
  }
};