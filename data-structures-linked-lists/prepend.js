/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newList = new LinkedList(value);
  const copyList = list;
  const merged = new LinkedList(newList.data, copyList.data, copyList.next.data, copyList.next.next.data, copyList.next.next.next.data);
  return merged;
}
