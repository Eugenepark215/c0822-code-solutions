/* exported includesSeven */
// boolean value
// for loop with if else
// is array contains 7 return true
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  } return false;
}
