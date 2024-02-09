const mobile ={
    brand : 'samsung',
    color : 'black',
    price : 25000,
    camera : '12mp'
}

// for of : array
// for in : object

for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}