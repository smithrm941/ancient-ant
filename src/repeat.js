var repeat = function(string, n){
  var stringArray = []
    while(n > 0){
      stringArray.push(string);
      n--;
    }
  var result = stringArray.join('');
  return result;
};

module.exports = repeat
