var chunk = function (array, number){
  var result = [];
  var spliceNumber
  if (number < 0 || !Array.isArray(array)){
    return result;
  } else if (number == undefined){
    spliceNumber = 1;
  } else if(number > 0){
      spliceNumber = number;
  }
    while(array.length > 0){
        temp = [];
        chunkOfNumber = array.splice(0, spliceNumber);
        result.push(chunkOfNumber);
    }

  return result;
};

module.exports = chunk;
