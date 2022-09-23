/* exported isPalindromic */
// parameter string return boolean based on first and last letter
// string[0] = 1st letter  string[string.length-1] = last letter
// if/else statement

function isPalindromic(string) {
  var stringReverse = '';
  for (var i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
    stringReverse.replace(' ', '');
  } if (stringReverse === string) {
    return true;
  } else {
    return false;
  }
}
