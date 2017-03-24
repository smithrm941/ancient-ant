var camelCase = function(string){
  var lettersNumbersOnly = string.replace(/[^A-Za-z0-9]/g, ' ').trim().toLowerCase();
  var stringToArray = lettersNumbersOnly.split(" ");


  var removeEmptyStrings = [];
    for(var i = 0; i < stringToArray.length; i++){
      if(stringToArray[i] !== ""){
        removeEmptyStrings.push(stringToArray[i]);
      }
    }

  var finalStringWords = [];
    finalStringWords.push(removeEmptyStrings[0]);
    for(var i = 1; i < removeEmptyStrings.length; i++){
      finalStringWords.push(removeEmptyStrings[i].charAt(0).toUpperCase().concat(removeEmptyStrings[i].slice(1)))
    }

  var camelCaseString = finalStringWords.join('');
  return camelCaseString;
};

module.exports = camelCase
