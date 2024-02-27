const actor = {
  name: "Ananta",
  age: 30,
  phone: "01735371207",
  money: 12461874184,
};

// If right side is an object then left will also be an object as well of destructuring
// Use property name as a variable that contains the property value

const { phone } = actor;
const { age } = actor;
const { age: boyosh } = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// console.log(actor.phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(boyosh);
// console.log(boyosh);
// console.log(boyosh);

// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 14];

// advanced
function doubleThem(a, b) {
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6,9);
console.log(prothom, ditiyo);
