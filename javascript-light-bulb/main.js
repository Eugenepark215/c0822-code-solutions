var click = 0;
var room = document.querySelector('body');
var lightBulb = document.querySelector('button');

function turnOnOff(event) {
  click++;
  if (click % 2 === 0) {
    lightBulb.className = 'lightbulb-off';
    room.className = 'off';
  } else {
    lightBulb.className = 'lightbulb-on';
    room.className = 'on';
  }
}
addEventListener('click', turnOnOff);
