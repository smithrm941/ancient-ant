var startsWith = function (string, target, position){
  if (target.length === 1) {
    if (position === undefined) {
      if (string[0] === target) {
        return true;
      } else {
        return false;
      }
    }
      if (string[position] === target) {
        return true;
      } else {
        return false;
      }
  } else if (target.length > 1) {
      if (string[position + target.length] === target);
      return true;
  } else {
    return false;
  }
};

module.exports = startsWith;
