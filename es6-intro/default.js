// default --> if value not provided take this as a default.
function add(num1=99, num2=0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 7);
// const sum = add(5);
// const sum = add();

// some default example

// for string
function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}

// for array
function friends(numbs = []){

}

// for object
function person(human = {}){

}

/**
 * Default parameters : 
 * Default function parameter allow named parameters to be initialized with default valed
 * if no value of undefined is passed
 */