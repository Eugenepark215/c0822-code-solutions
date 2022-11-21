/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) 0(n)
    i++                             // 2 * n = O(2n) 0(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) 0(n)
    if (!seen[word]) {              // 2 * n = O(2n) 0(n)
      seen[word] = true;            // 2 * n = O(2n) 0(n)
      unique[unique.length] = word; // 3 * n = O(3n) 0(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // _ * _ = O(?)
  for (
    let i = 0;                      // _ * _ = O(?)
    i < words.length;               // _ * _ = O(?)
    i++                             // _ * _ = O(?)
  ) {
    const word = words[i];          // _ * _ = O(?)
    let isUnique = true;            // _ * _ = O(?)
    for (
      let c = 0;                    // _ * _ = O(?)
      c < i;                        // _ * _ = O(?)
      c++                           // _ * _ = O(?)
    ) {
      const comparing = words[c];   // _ * _ = O(?)
      if (comparing === word) {     // _ * _ = O(?)
        isUnique = false;           // _ * _ = O(?)
      }
    }
    if (isUnique) {                 // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;                    // _ * _ = O(?)
} // Big O Notation for uniqueQuadratic: O(?)
