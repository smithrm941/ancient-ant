var drop = function (array, n){
  if(n == undefined){
    array.shift();
    return array;
  } else if (array.length <= n){
    return [];
  }
    array.splice(0, n);
    return array;
};

module.exports = drop;
