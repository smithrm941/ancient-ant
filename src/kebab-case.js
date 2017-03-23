var kebabCase = function(string){
  var lettersNumbersOnly = string.replace(/[^A-Za-z0-9]/g, ' ').trim().toLowerCase();
  var stringToArray = lettersNumbersOnly.split(" ");
  var removeEmptyStrings = [];
    for(var i = 0; i < stringToArray.length; i++){
      if(stringToArray[i] !== ""){
        removeEmptyStrings.push(stringToArray[i]);
      }
    }
  var stringKebab = removeEmptyStrings.join('-');
  return stringKebab;
};

module.exports = kebabCase
