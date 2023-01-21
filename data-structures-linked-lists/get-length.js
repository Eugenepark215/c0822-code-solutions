/* exported getLength */

function getLength(list) {
  let number = 0;
  while (list) {
    list = list.next;
    number++;
  }
  return number;
}
