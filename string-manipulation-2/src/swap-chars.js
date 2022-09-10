/* exported swapChars */
// firstindex = number index && second index = number
// string parameter swap the char at given index
// loop and reassign values of index
function swapChars(firstIndex, secondIndex, string) {
  var swapResult = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[firstIndex]) {
      string[i] = string[secondIndex];
      swapResult += string[i];
    } else if (string[i] === string[secondIndex]) {
      string[i] = string[firstIndex];
      swapResult += string[i];
    } else {
      swapResult += string[i];
    }
  }
  return swapResult;
}
