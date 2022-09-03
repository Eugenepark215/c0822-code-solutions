/* exported toObject */
// array input containing key and value
// creates a new object with the given key and value
// given array position 0 would be the key and the following would be the value
// return object with the key and value
// keyValuePair[0] = key & keyValuePair[1] = value
// set and retrun object[key]=value
function toObject(keyValuePair) {
  var keyValuePairObject = {};
  var value = keyValuePair[1];
  var key = keyValuePair[0];
  keyValuePairObject[key] = value;
  return keyValuePairObject;
}
