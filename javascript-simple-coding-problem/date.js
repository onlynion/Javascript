const today = new Date();
console.log(today);
const date = new Date('2024-02-10');
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getFullYear());
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));

// unix epoc
