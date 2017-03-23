var min = function(array){
  if(array === undefined){
    return undefined;
  }
  var currentLowValue;
    if(array[0] < array[1]){
      currentLowValue = array[0];
    } else if (array[0] > array[1]){
      currentLowValue = array[1];
    }

  for(var j = 2; j<array.length; j++){
    if(currentLowValue < array[j]){
      currentLowValue = currentLowValue;
    } else {
      currentLowValue = array[j];
    }
  }
  return currentLowValue;
};

module.exports = min;
