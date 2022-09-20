var h1 = document.querySelector('h1');
function h1toCountDown() {
  h1.textContent--;
  if (parseInt(h1.textContent) === 0) {
    h1.textContent = '~Earth Beeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(h1toCountDown, 2000);
