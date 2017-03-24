var join = function (array, separator){
  var tempString = ''
  if (separator == undefined){
    return array.toString();
  }
      for (var i = 0; i < array.length; i++){
        tempString += array[i] + separator;
        var resultString = tempString.slice(0, -1);
      }
  return resultString;
};

module.exports = join;
