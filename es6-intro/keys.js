const glass ={
    name : 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true
}

// all property name
const keys = Object.keys(glass);
// console.log(keys);
// ["name", "color", "price", "isCleaned"];

// all property values
const values = Object.values(glass);
// console.log(values);
// ["glass", "golden", 12, true];

const pair = Object.entries(glass);
// console.log(pair);

// array of array, two dimensional array
// [
//   ["name", "glass"],
//   ["color", "golden"],
//   ["price", 12],
//   ["isCleaned", true],
// ];

// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

Object.freeze(glass);
Object.seal(glass);

glass.source = 'Bangladesh';
glass.price = 500;
delete glass.color;

// console.log(glass);