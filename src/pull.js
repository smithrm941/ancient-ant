var pull = function (){
  if(arguments.length == 1){
    return arguments[0];
  } else if (arguments.length > 1) {
    var originArray = arguments[0];
    var secondaryArgs = [];
    var resultArray = [];

      for(var i = 1; i<arguments.length; i++){
        secondaryArgs.push(arguments[i]);
      }

      for(var i = 0; i<originArray.length; i++){
        if(secondaryArgs.includes(originArray[i]) === false){
          resultArray.push(originArray[i]);
        }
      }
    return resultArray;
  }
};

module.exports = pull;
