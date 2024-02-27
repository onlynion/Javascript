const difference = (a,b) => a-b;

const result = difference(70,1);
console.log(result);

const multiply = (first, second, third) => first * second * third;

const mult = multiply(5,2,30);
console.log(mult);

// single or one parameter
const getAge = (person) => person.age;
const student = {name : 'ananta', age : 45};
console.log(getAge(student));

const number = numbers => numbers[2];
const digit = [1, 4, 85, 76, 876];
console.log(number(digit));

const getDouble = num => num *2;
console.log(getDouble(5));

// no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function. if you want to get anything returnted from this function then you have to use the return function
const doMath = (a, b, c) => {
    const sum = a + b + c;
    const mult = a * b * c;
    const result = sum + mult;
    return result;
}

console.log(doMath(5,7,9));