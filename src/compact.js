var compact = function (array){
  var result = [];
  if (!Array.isArray(array)){
    return result;
  } else {
    for (var i = 0; i < array.length; i++){
      if (array[i]){
        result.push(array[i]);
      } else {

      }
    }
    return result;
  }
};

module.exports = compact;
