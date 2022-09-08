document.querySelector('.task-list').addEventListener('click', function (event) {

  console.log(event.target);
  console.log(event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
});
