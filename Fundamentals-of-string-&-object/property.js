const person ={
    name : 'sodor uddin',
    age : 45,
    designation : 'developer',
    salary : 25000,
    married : true,
    'fav places' : ['sundarban', 'bandarban', 'andarban']
}

// console.log(person);

// dot notation
// console.log(person.married);
// console.log(person.salary);
// console.log(person.designation);
// console.log(person.age);
// console.log(person.name);

// const income = person.salary;

// console.log(income);

// bracket notation
console.log(person['designation']);
const beton = person['salary'];

console.log(beton);
console.log(person["fav places"]);