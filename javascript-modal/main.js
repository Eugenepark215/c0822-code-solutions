function textbox(event) {
  document.querySelector('#modal').className = 'transparent';

}
function close(event) {
  document.querySelector('#modal').className = 'hidden';
}

document.querySelector('.blue').addEventListener('click', textbox);
document.querySelector('.red').addEventListener('click', close);
