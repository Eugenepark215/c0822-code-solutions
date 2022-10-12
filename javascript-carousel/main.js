var interval = setInterval(carousel, 3000);
var buttonRow = document.querySelector('#buttonRow');
var images = document.querySelector('img');
var buttonAll = document.querySelectorAll('button');
var imagesArray = ['http://localhost:5500/javascript-carousel/images/001.png', 'http://localhost:5500/javascript-carousel/images/004.png', 'http://localhost:5500/javascript-carousel/images/007.png', 'http://localhost:5500/javascript-carousel/images/025.png', 'http://localhost:5500/javascript-carousel/images/039.png'];
var chevronLeft = document.querySelector('#chevron-left');
var chevronRight = document.querySelector('#chevron-right');
var currentIndex = 0;

buttonRow.addEventListener('click', function (event) {
  for (var i = 0; i < buttonAll.length; i++) {
    if (buttonAll[i].getAttribute('id') === event.target.getAttribute('id')) {
      buttonAll[i].setAttribute('class', 'black');
      images.setAttribute('src', imagesArray[i]);
      currentIndex = i;
    } else {
      buttonAll[i].setAttribute('class', 'color-none');
    }
  }
  clearInterval(interval);
  interval = setInterval(carousel, 3000);
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
  chevronLeft.setAttribute('data-image-index', showPreviousIndex());
  showIndex(parseInt(chevronLeft.getAttribute('data-image-index')));
});

chevronRight.addEventListener('click', function () {
  chevronRight.setAttribute('data-image-index', showNextIndex());
  showIndex(parseInt(chevronRight.getAttribute('data-image-index')));
});

function carousel() {
  var next = showNextIndex();
  showIndex(next);
}
