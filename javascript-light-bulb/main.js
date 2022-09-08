var onOrOff = true;
var room = document.querySelector('div');
var lightBulb = document.querySelector('button');

function turnOnOff(event) {

  if (onOrOff === true) {
    lightBulb.className = 'lightbulb-on';
    room.className = 'on';
    onOrOff = false;
  } else if (onOrOff === false) {
    lightBulb.className = 'lightbulb-off';
    room.className = 'off';
    onOrOff = true;
  }

}
addEventListener('click', turnOnOff);
