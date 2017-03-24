var slice = function(array, startingIndex, endingIndex){
  if (startingIndex == undefined && endingIndex == undefined){
    return array;
  } else if (endingIndex == undefined){
      array.splice(0, startingIndex);
      return array;
  }
    if(startingIndex == 0){
      while(array.length > endingIndex){
        array.pop();
      }
      return array;
    } else {
      while(array.length > endingIndex){
        array.pop();
      }
      while(array.length > endingIndex - startingIndex){
        array.shift();
      }
      return array;
    }
};

module.exports = slice;
