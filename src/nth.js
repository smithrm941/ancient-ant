var nth = function(array, n){
  if(n > 0){
    return array[n];
  }
    var reversedArray = array.reverse();
    return reversedArray[Math.abs(n) - 1]
};

module.exports = nth;
