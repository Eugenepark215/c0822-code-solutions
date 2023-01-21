/* exported addSuffixToAll */
// values inside array will be modified
// array[index] + string
// array.length for loop
// returns new value push + string
// array.push (array[i] + string)
function addSuffixToAll(words, suffix) {
  var addSuffixToAllArray = [];
  for (var i = 0; i < words.length; i++) {
    addSuffixToAllArray.push(words[i] + suffix);
  }
  return addSuffixToAllArray;
}
