function handleFocus(event) {
  console.log('Focused!');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blurred!');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name + ':' + ' ' + event.target.value);
}
document.querySelector('#user-name').addEventListener('focus', handleFocus);
document.querySelector('#user-name').addEventListener('input', handleInput);
document.querySelector('#user-name').addEventListener('blur', handleBlur);

document.querySelector('#user-email').addEventListener('focus', handleFocus);
document.querySelector('#user-email').addEventListener('input', handleInput);
document.querySelector('#user-email').addEventListener('blur', handleBlur);

document.querySelector('#user-message').addEventListener('focus', handleFocus);
document.querySelector('#user-message').addEventListener('blur', handleBlur);
document.querySelector('#user-message').addEventListener('input', handleInput);
