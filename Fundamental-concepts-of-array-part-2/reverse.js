const array = [1, 2, 3, 4, 5, 6, 7]

// const rArray = array.reverse()
// console.log(rArray);

// const number = [];
// for(const num of array){
//     number.unshift(num);
// }
// console.log(number);

const rev_num = [];
for(let i=array.length-1; i>=0; i--){
    rev_num.push(array[i]);
}
console.log(rev_num);