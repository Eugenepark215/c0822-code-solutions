/* exported isAnagram */
// 2 string parameters will be compared and boolean will be returned
// if chraracters of string1 are all present in string 2 return true
// loop to go through all string1 characters
// 2nd loop to go through all string 2 chraracters
// rerturn boolean

function isAnagram(firstString, secondString) {
  var firstStringResult = '';
  var secondStringResult = '';
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringResult += firstString[i];
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      secondStringResult += secondString[j];
    }
  }
  firstStringResult = firstStringResult.split('').sort().join('');
  secondStringResult = secondStringResult.split('').sort().join('');
  if (firstStringResult === secondStringResult) {
    return true;
  } else {
    return false;
  }
}
