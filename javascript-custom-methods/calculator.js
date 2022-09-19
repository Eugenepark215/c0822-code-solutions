/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sumAllResults = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumAllResults += numbers[i];
    }
    return sumAllResults;
  },
  getAverage: function (numbers) {
    var getAverageResults = 0;
    for (var j = 0; j < numbers.length; j++) {
      getAverageResults += numbers[j];
      var getResults = (getAverageResults / numbers.length);
    }
    return getResults;
  }
};
