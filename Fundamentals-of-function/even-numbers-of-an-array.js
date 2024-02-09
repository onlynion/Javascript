function evenNumbersOfArray(numbers) {
  let evenArray = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenArray.push(num);
    }
  }

  return evenArray;
}

const array = [1, 2, 5, 4, 7, 8, 4, 10, 16, 12];
let arrayOfEven = evenNumbersOfArray(array);
console.log(arrayOfEven);