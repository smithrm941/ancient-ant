var range = function(start, end, step){
  var result = [];

  if(end === undefined && step === undefined){
    if(start > 0){
      while(start > 0){
        result.push(start -1)
        start --;
      }
    } else if (start < 0){
      while(start < 0){
        result.push(start +1)
        start ++;
      }
    }

    return result.reverse();

  } else if (step === undefined){
    if(start > 0 && end > 0){ //Statement A
      result.push(start);
      while(start < end-1){
        result.push(start +1)
        start ++;
      }
      return result;
    } else if (start < 0 && end > 0){ //Statment A
      result.push(start);
      while(start < end-1){
        result.push(start +1)
        start ++;
      }
      return result;
    } else if (start > 0 && end < 0){// Unique A
      result.push(start);
      while(start > end+1){
        result.push(start -1)
        start --;
      }
      return result;
    } else if (start < 0 && end < 0){ // Unique A
      result.push(start);
      while(start > end+1){
        result.push(start -1)
        start --;
      }
      return result;
    }
  } else {
  //start is our starting number
  //step is what we are incrementing or decrementing by
  //end is at the end of the range but will not be included in the array
    if(start >= 0 && end >= 0 && step >= 0){ //Statement A
      result.push(start);
      while(start < end-step){
        result.push(start+step)
        start +=step;
      }
    return result;

  } else if (start <= 0 && end >= 0 && step >= 0){ //Statement A
      result.push(start);
      while(start < end-step){
        result.push(start+step)
        start +=step;
      }
    return result;

  } else if (start >= 0 && end <= 0 && step <= 0){ //Statement B
      result.push(end);
      while(end < start){
        result.push(end-step)
        end -= step;
      }
      result = result.reverse();
      result.pop();
    return result;

  } else if (start >= 0 && end >= 0 & step <= 0){ //Statement B
      result.push(end);
      while(end < start){
        result.push(end-step)
        end -= step;
      }
      result = result.reverse();
      result.pop();
    return result;

  } else if (start <= 0 && end <= 0 && step <= 0){ //Unique B
      result.push(start);
      while(start > end-step){
        result.push(start+step)
        start +=step;
      }
    return result;

  } else if (start <= 0 && end <= 0 && step >= 0){ //Statement A
      result.push(start);
      while(start < end-step){
        result.push(start+step)
        start +=step;
      }
    return result;

    }
 }
  return result;
};


module.exports = range;
