/* exported swapChars */
// firstindex = number index && second index = number
// string parameter swap the char at given index
// loop and reassign values of index
// if i === first or second index reassign value
function swapChars(firstIndex, secondIndex, string) {
  var swapResult = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapResult += string[secondIndex];
    } else if (i === secondIndex) {
      swapResult += string[firstIndex];
    } else {
      swapResult += string[i];
    }
  }
  return swapResult;
}
