let a = 5;
let b = 7;

console.log(a, b);

// a = b;
// b = a;

// console.log(a, b);

let temp = a;
a = b;
b = temp;

console.log(a, b);

// ----------------------------
let x = 12;
let y = 24;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);
