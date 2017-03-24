var lowerFirst = function(string) {
  var resultString = string.charAt(0).toLowerCase().concat(string.slice(1));
  return resultString;
};

module.exports = lowerFirst;
