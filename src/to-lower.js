var toLower = function(string){
  var resultArray = [];
  for(var i = 0; i<string.length; i++){
    if(string[i].match(/[^A-Z]/g)){
        resultArray.push(string[i]);
    }
      switch (string[i]){
        case 'A':
          resultArray.push(string[i].replace(string[i], 'a'));
          break;
        case 'B':
          resultArray.push(string[i].replace(string[i], 'b'));
          break;
        case 'C':
          resultArray.push(string[i].replace(string[i], 'c'));
          break;
        case 'D':
          resultArray.push(string[i].replace(string[i], 'd'));
          break;
        case 'E':
          resultArray.push(string[i].replace(string[i], 'e'));
          break;
        case 'F':
          resultArray.push(string[i].replace(string[i], 'f'));
          break;
        case 'G':
          resultArray.push(string[i].replace(string[i], 'g'));
          break;
        case 'H':
          resultArray.push(string[i].replace(string[i], 'h'));
          break;
        case 'I':
          resultArray.push(string[i].replace(string[i], 'i'));
          break;
        case 'J':
          resultArray.push(string[i].replace(string[i], 'j'));
          break;
        case 'K':
          resultArray.push(string[i].replace(string[i], 'k'));
          break;
        case 'L':
          resultArray.push(string[i].replace(string[i], 'l'));
          break;
        case 'M':
          resultArray.push(string[i].replace(string[i], 'm'));
          break;
        case 'N':
          resultArray.push(string[i].replace(string[i], 'n'));
          break;
        case 'O':
          resultArray.push(string[i].replace(string[i], 'o'));
          break;
        case 'P':
          resultArray.push(string[i].replace(string[i], 'p'));
          break;
        case 'Q':
          resultArray.push(string[i].replace(string[i], 'q'));
          break;
        case 'R':
          resultArray.push(string[i].replace(string[i], 'r'));
          break;
        case 'S':
          resultArray.push(string[i].replace(string[i], 's'));
          break;
        case 'T':
          resultArray.push(string[i].replace(string[i], 't'));
          break;
        case 'U':
          resultArray.push(string[i].replace(string[i], 'u'));
          break;
        case 'V':
          resultArray.push(string[i].replace(string[i], 'v'));
          break;
        case 'W':
          resultArray.push(string[i].replace(string[i], 'w'));
          break;
        case 'X':
          resultArray.push(string[i].replace(string[i], 'x'));
          break;
        case 'Y':
          resultArray.push(string[i].replace(string[i], 'y'));
          break;
        case 'Z':
          resultArray.push(string[i].replace(string[i], 'z'));
          break;
      }
    }
  var resultString = resultArray.join('');
  return resultString;
};

module.exports = toLower;
