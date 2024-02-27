// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign 

const money =  25;
// money = 50; it will not execute
const rich = money + 50;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [23, 4, 23, 12, 56];
// const numbers = [4, 5, 7, 7]; it will not execute
numbers[1] = 55;
numbers.push(8, 9, 25);
console.log(numbers);

// Object
// if you want to reassign the object you have to declare it as  let 
let student = { 
    name : 'moyna pakhi',
    class : 12
}

// student ={name : 'kokil konthi'}
student.name = 'moyur konthi';

console.log(student);