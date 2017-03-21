var concat = function (){
  var result = [];
    for (var i = 0; i < arguments.length; i++){
      if (Array.isArray(arguments[i])){
        for (var j = 0; j < arguments[i].length; j++){
          result.push(arguments[i][j]);
        }
      } else if (!Array.isArray(arguments[i])){
          result.push(arguments[i]);
      }
    }
  return result;
};

module.exports = concat;
