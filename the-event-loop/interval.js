let currentCount = 3;
const intervals = setInterval(function interval() {
  if (currentCount > 0) {
    console.log(currentCount--);
  } else {
    console.log('Blast Off!');
    clearInterval(intervals);
  }
}, 1000);
