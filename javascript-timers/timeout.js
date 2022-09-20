var h1 = document.querySelector('h1');
function h1toHello() {
  if (h1.textContent === '...') {
    h1.textContent = 'Hello There';
  }
}
setTimeout(h1toHello, 2000);
