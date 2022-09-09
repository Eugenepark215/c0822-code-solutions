var span = document.querySelectorAll('span');
var i = 0;

window.addEventListener('keydown', function (event) {
  if (event.key === span[i].textContent) {
    span[i].className = 'correct';
    span[i + 1].className = 'current';
    i++;
  } else {
    span[i].className = 'incorrect current';
  }

});
