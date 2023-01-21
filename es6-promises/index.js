const takeAChance = require('./take-a-chance');
var tookAChance = takeAChance('Eugene Park');
tookAChance.then(string => {
  console.log(string);
},
tookAChance.catch(error => {
  console.error(error.message);
})
);
