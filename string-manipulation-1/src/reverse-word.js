/* exported reverseWord */
// word is entered and the reverse is returned
// reverse loop
// var to contain flipped words
// add by getting length of word and decrement
function reverseWord(word) {
  var reverseWordResult = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWordResult += word[i];
  } return reverseWordResult;
}
