/* exported capitalizeWords */
// enter string with spaces
// capitalize first letter or each word and lowercase the rest
// need to identify where spaces are and capitalize the index after space
// can lower case all letter first and then captialize index 0 and all indexes after space
// loop
function capitalizeWords(string) {
  var capitalizeResult = '';
  var lowerCase = string.toLowerCase();
  for (var i = 0; i < lowerCase.length; i++) {
    if (lowerCase.charAt(i) === ' ') {
      lowerCase[i + 1].toUpperCase();
      capitalizeResult += lowerCase[i];
    } else {
      capitalizeResult += lowerCase[i];
    }
  }
  return capitalizeResult;

}
