/* exported getWords */
// string input that can contain 0 and spaces
// return array contained with each word in string
// split words from the spaces
// split makes array
// for loop to go through the string
// if else to check to see if charater is space or not
// if there's space in string split and return
// if it doesn't return as is
// no value return empty array
function getWords(string) {
  var getWordsEmptyArray = [];
  if (string === '') {
    return getWordsEmptyArray;
  }
  return string.split(' ');
}
