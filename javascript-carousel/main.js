var interval = setInterval(carousel, 3000);

var images = document.querySelector('img');
var buttonAll = document.querySelectorAll('button');
var buttonFirst = document.querySelector('.first');
var buttonSecond = document.querySelector('.second');
var buttonThird = document.querySelector('.third');
var buttonFourth = document.querySelector('.fourth');
var buttonFifth = document.querySelector('.fifth');
var imagesArray = ['http://localhost:5500/javascript-carousel/images/001.png', 'http://localhost:5500/javascript-carousel/images/004.png', 'http://localhost:5500/javascript-carousel/images/007.png', 'http://localhost:5500/javascript-carousel/images/025.png', 'http://localhost:5500/javascript-carousel/images/039.png'];
var chevronLeft = document.querySelector('#chevron-left');
var chevronRight = document.querySelector('#chevron-right');
var currentIndex = 0;

buttonFirst.addEventListener('click', function () {
  showIndex(0);
});

buttonSecond.addEventListener('click', function () {
  showIndex(1);
});

buttonThird.addEventListener('click', function () {
  showIndex(2);
});

buttonFourth.addEventListener('click', function () {
  showIndex(3);
});

buttonFifth.addEventListener('click', function () {
  showIndex(4);
});

function showIndex(newIndex) {
  for (var i = 0; i < buttonAll.length; i++) {
    if (i === newIndex) {
      buttonAll[i].setAttribute('class', 'black');
      images.setAttribute('src', imagesArray[i]);
      currentIndex = i;
    } else {
      buttonAll[i].setAttribute('class', 'color-none');
    }
  }
  clearInterval(interval);
  interval = setInterval(carousel, 3000);
}

function showNextIndex() {
  if (currentIndex !== 4) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  return currentIndex;
}

function showPreviousIndex() {
  if (currentIndex !== 0) {
    currentIndex--;
  } else {
    currentIndex = 4;
  }
  return currentIndex;
}

chevronLeft.addEventListener('click', function () {
  var previous = showPreviousIndex();
  showIndex(previous);
});

chevronRight.addEventListener('click', function () {
  var next = showNextIndex();
  showIndex(next);
});

function carousel() {
  var next = showNextIndex();
  showIndex(next);
}
