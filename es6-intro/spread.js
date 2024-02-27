const max = Math.max(2, 3, 4, 6, 2, 55, 3445);
// console.log(max);

const numbers = [1, 2, 2, 434, 532, 3, 5];
// console.log(numbers);
// console.log(...numbers);
// console.log(Math.max(...numbers));

// Use sparede operator to copy
const nums = [4, 5, 7, 9];
const nums2 = nums;
nums2.push(12);
// console.log(nums);
// console.log(nums2);

const nums3 = [...nums]; // Copy
nums.push(100);
// console.log(nums);
// console.log(nums3);

// advanced
const sonkha = [...nums, 9999]; // Add extra element while copy
console.log(sonkha);
