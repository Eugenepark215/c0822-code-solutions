/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var getInitialsOfPersonResults = person.firstName[0] + person.lastName[0];
  return getInitialsOfPersonResults;
}

getInitialsOfPerson('person');
