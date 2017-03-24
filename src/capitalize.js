var capitalize = function(string){
  var lowerCaseString = string.toLowerCase();
  var capitalizedString = lowerCaseString.charAt(0).toUpperCase().concat(lowerCaseString.slice(1));
  return capitalizedString;
};

module.exports = capitalize;
