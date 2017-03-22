var reverse = function (array){
  if (array.length == 1){
    return array;
  }
  var result = [];
  for (var i = array.length - 1; i >= 0; i--){
    result.push(array[i]);
  }
  return result;
};

module.exports = reverse;
