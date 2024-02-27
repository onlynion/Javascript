const first = 'jaan';
const last = 'pakhi';
const greet = 'potas potas'
const full = first + ' ' + last + ' ' + greet;

console.log(full);

const a = 10;
const b = 20;
const result = 'The sum of' + ' ' + a + ' ' + 'and' + ' ' + b + ' ' + 'is' + ' ' + (a+b);
console.log(result);

const math = `The sum of ${a} and ${b} is ${a+b}`;
console.log(math);

const email = 'Hi john \n' +
'cena cena lage \n' +
'tumi maramari korba naki';

console.log(email);

const challenge = `John cena
cena naki ochena mair dimu prochur`;

console.log(challenge);

/**
 * Template litearals:
 * Template literals are enclosed by backtick(`) characters instead of double or single quotes,allowing
 * for the following :
 *  1. multi-line string
 *  2. string interpolation
 */