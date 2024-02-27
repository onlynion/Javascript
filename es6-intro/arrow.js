// function declaration
// function add(a,b){
//     const result = a+b;
//     return result;
// }

function add(a,b){
    return a+b;
}

// function expression
const add2 = function(){
    return a + b;
}

// arrow function
const add3 = (a,b) => a+b;

const sum2 = add3(60,9);
console.log(sum2);

const sum = add(5, 90);
console.log(sum);

/**
 * Arrow function:
 * Arrow function is one of the features introduced in the ES6 version of javascript. It allows you
 * to create functions in a cleaner way compared to regular functions
 */