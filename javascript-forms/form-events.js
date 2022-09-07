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

document.querySelector('#user-name').addEventListener('input', handleFocus);
document.querySelector('#user-email').addEventListener('input', handleBlur);
document.querySelector('#user-message').addEventListener('input', handleInput);

document.querySelector('#user-name').addEventListener('focus', handleFocus);
document.querySelector('#user-email').addEventListener('focus', handleBlur);
document.querySelector('#user-message').addEventListener('focus', handleInput);

document.querySelector('#user-name').addEventListener('blur', handleFocus);
document.querySelector('#user-email').addEventListener('blur', handleBlur);
document.querySelector('#user-message').addEventListener('blur', handleInput);
