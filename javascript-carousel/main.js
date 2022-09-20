var interval = setInterval(carousel, 3000);

var images = document.querySelector('img');
var buttonAll = document.querySelectorAll('button');
var buttonFirst = document.querySelector('.first');
var buttonSecond = document.querySelector('.second');
var buttonThird = document.querySelector('.third');
var buttonFourth = document.querySelector('.fourth');
var buttonFifth = document.querySelector('.fifth');

buttonFirst.addEventListener('click', function () {
  images.setAttribute('src', 'images/001.png');
  buttonFirst.setAttribute('class', 'black');
  buttonSecond.setAttribute('class', 'color-none');
  buttonThird.setAttribute('class', 'color-none');
  buttonFourth.setAttribute('class', 'color-none');
  buttonFifth.setAttribute('class', 'color-none');
  clearInterval(interval);
  interval = setInterval(carousel, 3000);
});

buttonSecond.addEventListener('click', function () {
  images.setAttribute('src', 'images/004.png');
  buttonSecond.setAttribute('class', 'black');
  buttonFirst.setAttribute('class', 'color-none');
  buttonThird.setAttribute('class', 'color-none');
  buttonFourth.setAttribute('class', 'color-none');
  buttonFifth.setAttribute('class', 'color-none');
  clearInterval(interval);
  interval = setInterval(carousel, 3000);
});

buttonThird.addEventListener('click', function () {
  images.setAttribute('src', 'images/007.png');
  buttonThird.setAttribute('class', 'black');
  buttonFirst.setAttribute('class', 'color-none');
  buttonSecond.setAttribute('class', 'color-none');
  buttonFourth.setAttribute('class', 'color-none');
  buttonFifth.setAttribute('class', 'color-none');
  clearInterval(interval);
  interval = setInterval(carousel, 3000);
});

buttonFourth.addEventListener('click', function () {
  images.setAttribute('src', 'images/025.png');
  buttonFourth.setAttribute('class', 'black');
  buttonFirst.setAttribute('class', 'color-none');
  buttonSecond.setAttribute('class', 'color-none');
  buttonThird.setAttribute('class', 'color-none');
  buttonFifth.setAttribute('class', 'color-none');
  clearInterval(interval);
  interval = setInterval(carousel, 3000);
});

buttonFifth.addEventListener('click', function () {
  images.setAttribute('src', 'images/039.png');
  buttonFifth.setAttribute('class', 'black');
  buttonFirst.setAttribute('class', 'color-none');
  buttonSecond.setAttribute('class', 'color-none');
  buttonThird.setAttribute('class', 'color-none');
  buttonFourth.setAttribute('class', 'color-none');
  clearInterval(interval);
  interval = setInterval(carousel, 3000);
});

var imagesArray = ['http://localhost:5500/javascript-carousel/images/001.png', 'http://localhost:5500/javascript-carousel/images/004.png', 'http://localhost:5500/javascript-carousel/images/007.png', 'http://localhost:5500/javascript-carousel/images/025.png', 'http://localhost:5500/javascript-carousel/images/039.png'];
var chevronLeft = document.querySelector('#chevron-left');
var chevronRight = document.querySelector('#chevron-right');

chevronLeft.addEventListener('click', function () {
  if (images.src === 'http://localhost:5500/javascript-carousel/images/001.png') {
    images.setAttribute('src', 'images/039.png');
    buttonFirst.setAttribute('class', 'color-none');
    buttonFifth.setAttribute('class', 'black');
    clearInterval(interval);
    interval = setInterval(carousel, 3000);
  } else {
    for (var i = 0; i < imagesArray.length; i++) {
      if (images.src === imagesArray[i]) {
        images.setAttribute('src', imagesArray[i - 1]);
        buttonAll[i - 1].setAttribute('class', 'black');
        buttonAll[i].setAttribute('class', 'color-none');
        clearInterval(interval);
        interval = setInterval(carousel, 3000);
      }
    }
  }
});

chevronRight.addEventListener('click', function () {
  if (images.src === 'http://localhost:5500/javascript-carousel/images/039.png') {
    images.setAttribute('src', 'images/001.png');
    buttonFifth.setAttribute('class', 'color-none');
    buttonFirst.setAttribute('class', 'black');
    clearInterval(interval);
    interval = setInterval(carousel, 3000);
  } else {
    for (var j = imagesArray.length - 1; j >= 0; j--) {
      if (images.src === imagesArray[j]) {
        images.setAttribute('src', imagesArray[j + 1]);
        buttonAll[j + 1].setAttribute('class', 'black');
        buttonAll[j].setAttribute('class', 'color-none');
        clearInterval(interval);
        interval = setInterval(carousel, 3000);
      }
    }
  }
});

function carousel() {
  if (images.src === 'http://localhost:5500/javascript-carousel/images/039.png') {
    images.setAttribute('src', 'images/001.png');
    buttonFifth.setAttribute('class', 'color-none');
    buttonFirst.setAttribute('class', 'black');
  } else {
    for (var j = imagesArray.length - 1; j >= 0; j--) {
      if (images.src === imagesArray[j]) {
        images.setAttribute('src', imagesArray[j + 1]);
        buttonAll[j + 1].setAttribute('class', 'black');
        buttonAll[j].setAttribute('class', 'color-none');
      }
    }
  }
}
