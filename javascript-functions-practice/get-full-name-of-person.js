/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  var getFullNameOfPersonResults = (person.firstName + ' ' + person.lastName);
  return getFullNameOfPersonResults;
}

getFullNameOfPerson('person');
