/* exported initial */
// array is entered
// new array returned
// all arrays excpet last
// i = 0; i < array.length -1
function initial(array) {
  var initialArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
