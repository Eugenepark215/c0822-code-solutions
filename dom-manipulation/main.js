var storeClick = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function hotButtonChange(event) {
  storeClick++;
  var temperature = '';
  if (storeClick < 4) {
    temperature = 'cold';
  } else if (storeClick < 7) {
    temperature = 'cool';
  } else if (storeClick < 10) {
    temperature = 'tepid';
  } else if (storeClick < 13) {
    temperature = 'warm';
  } else if (storeClick < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  hotButton.className = 'hot-button ' + temperature;
  clickCount.textContent = 'Click:' + storeClick;
}
addEventListener('click', hotButtonChange);
