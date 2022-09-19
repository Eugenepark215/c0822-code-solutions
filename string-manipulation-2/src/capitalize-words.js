/* exported capitalizeWords */
// enter string with spaces
// capitalize first letter or each word and lowercase the rest
// need to identify where spaces are and capitalize the index after space
// can lower case all letter first and then captialize index 0 and all indexes after space
// loop
// split to identify whitespace make array and at index[0]toUppercase
// make array into string
function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  lowerCase = lowerCase.split(' ');
  for (var i = 0; i < lowerCase.length; i++) {
    lowerCase[i] = lowerCase[i][0].toUpperCase() + lowerCase[i].substr(1);
  }
  return lowerCase.join(' ');

}
