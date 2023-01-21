/* exported reverseWords */
// given string reverse the letters of the word in position
// split each word and then split letter
// reverse method to reverse position within the array within array
// inside the array of array join the letters together
// join the word in array with ' '

function reverseWords(string) {
  var splitArray = string.split(' ');
  for (var i = 0; i < splitArray.length; i++) {
    var splitWordsInArray = splitArray[i].split('');
    splitWordsInArray.reverse();
    splitArray[i] = splitWordsInArray.join('');
  }
  return splitArray.join(' ');
}
