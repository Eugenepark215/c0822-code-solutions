/* exported defaults */
// target & source = object
// given 2 objects target is modified to include property in source
// if target already has property that is in souce default to property in target
// no return
// target is modified
// for in loop to loop through property of source object
// if target obj does not contain source prop push source prop into object
// if else it target obj contains source prop do not modify the preexisitng prop in target

function defaults(target, source) {
  for (var x in source) {
    if (target[x] === undefined) {
      target[x] = source[x];
    }
  }
}
