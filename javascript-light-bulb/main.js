
var room = document.querySelector('div');
var lightBulb = document.querySelector('button');

function turnOnOff(event) {

  if (lightBulb.className === 'lightbulb-off') {
    lightBulb.className = 'lightbulb-on';
    room.className = 'on';
  } else {
    lightBulb.className = 'lightbulb-off';
    room.className = 'off';
  }
}
addEventListener('click', turnOnOff);
