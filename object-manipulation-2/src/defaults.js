/* exported defaults */
// target & source = object
// given 2 objects target is modified to include property in source
// if target already has property that is in souce default to property in target
// no return
// target is modified
function defaults(target, source) {
  for (var x in source) {
    for (var y in target) {
      if (x === y || source[x] !== target[y]) {
        source[x] = target[y];
      }
    }
  }
  target = Object.assign(target, source);

}
