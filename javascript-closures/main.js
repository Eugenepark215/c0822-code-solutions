const graduate = function (credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
};

const medicalSchool = graduate('M.D');
const lawSchool = graduate('Esq.');

const dan = medicalSchool('Dan Abramov');
const ryan = lawSchool('Ryan Florence');

console.log(dan);
console.log(ryan);
