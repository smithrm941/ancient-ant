var chunk = function (array, number){
  var final = [];
  if(Array.isArray(array) && number > 0){
    for(var i = 0; i<array.length;){
        temp = [];
        chunkOfNumber = array.splice(0, number);
        final.push(chunkOfNumber);
    }
  } else if (Array.isArray(array) && number == undefined){
    for(var i = 0; i<array.length;){
        temp = [];
        chunkOfNumber = array.splice(0, 1);
        final.push(chunkOfNumber);
    }
  }
  return final;
};

module.exports = chunk;
