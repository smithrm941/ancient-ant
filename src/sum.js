var sum = function(array){
  if (array === undefined || !Array.isArray(array)){
    return undefined;
  } 
    var result = array[0];

    for(var i = 1; i<array.length; i++){
      result += array[i];
    }
  return result;
};

module.exports = sum;
