/* exported getStudentNames */
// accessing objects - index
// new array with name properites push
// for in loop for each object in array
// student[x].property
function getStudentNames(students) {
  var getStudentNamesArray = [];
  for (var x in students) {
    getStudentNamesArray.push(students[x].name);
  }
  return getStudentNamesArray;
}
