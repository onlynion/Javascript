const sentence = 'I am learning Web Dev.';
// const result = '. veD beW gninrael ma I';

let reverse = '';
// for(const letter of sentence){
//     console.log(letter);
// }

// web --> w --> ew --> bew
// donal --> d --> od --> nod --> anod --> lanod

// for(const letter of sentence){
//     reverse = letter + reverse;
// }

// console.log(reverse);

const reversed = sentence.split('').reverse().join('');

console.log(reversed);