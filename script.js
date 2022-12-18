"use strict";

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
const root = numbers.map(x => x * x);

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
console.log(roots, root);