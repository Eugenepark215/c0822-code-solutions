
var room = document.querySelector('div');
var lightBulb = document.querySelector('button');

function turnOnOff(event) {

  if (room === true) {
    lightBulb.className = 'lightbulb-on';
    room.className = 'on';
  } else {
    lightBulb.className = 'lightbulb-off';
    room.className = 'off';
  }
}
addEventListener('click', turnOnOff);
