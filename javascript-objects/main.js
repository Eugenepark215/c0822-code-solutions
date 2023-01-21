var student = {
  firstName: 'Eugene',
  lastName: 'Park',
  age: 24
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrinve = false;
student.previousOccupation = 'construction project manager';
console.log('value of student.livesInIrvine:', student.livesInIrinve);
console.log('value of student.previousOccuptation:', student.previousOccupation);
console.log('value of student', student);

var vechile = {
  make: 'Nissan',
  model: 'Versa',
  year: 2016
};

vechile['color'] = 'black';
vechile['isConvertable'] = false;
console.log('value of vechile[\'color\']', vechile['color']);
console.log('value of vechile[\'isConvertable\']', vechile['isConvertable']);
console.log('value of vechile', vechile);

var pet = {
  name: 'Cleo',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
