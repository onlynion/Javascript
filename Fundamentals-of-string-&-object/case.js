const school = 'Raj uk uttara model school';
console.log(school);
console.log(school.toUpperCase());

const subject = 'CHEMISTRY';
const book = 'chemistry';

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log("I am reading book , eibar porikkhay fatay dibo");
}

else{
    console.log("Huai prishta ultaitachi jate amare vat khaite dey");
}

if(subject === book){
    console.log("I am reading book , eibar porikkhay fatay dibo");
}

else{
    console.log("Huai prishta ultaitachi jate amare vat khaite dey");
}