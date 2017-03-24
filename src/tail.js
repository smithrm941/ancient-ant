var tail = function(array){
  result = [];
  for(var i = 1; i<array.length; i++){
    result.push(array[i]);
  }
  return result;
};

module.exports = tail;
