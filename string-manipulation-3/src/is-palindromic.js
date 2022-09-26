/* exported isPalindromic */
// parameter string return boolean based on reversed string
// push characers without spaces into new varabiales
// if/else statement to compare

function isPalindromic(string) {
  var stringReverse = '';
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      stringReverse += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      newString += string[j];
    }
  }
  if (stringReverse === newString) {
    return true;
  } else {
    return false;
  }
}
