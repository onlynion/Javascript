function sumOfarray (numbers){
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }

    return sum;
}

const sum = sumOfarray([2,4,6,8,10,12,14,16,18,20]);
console.log(sum);