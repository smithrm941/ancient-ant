var compact = function (array){
  var result = [];
  if (!Array.isArray(array)){
    return result;
  }
  for (var i = 0; i < array.length; i++){
    if (array[i]){
      result.push(array[i]);
    } 
  }
  return result;
};

module.exports = compact;
