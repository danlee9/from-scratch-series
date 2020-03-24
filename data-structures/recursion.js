function factorial(num) {
    if (num <= 0) {
        console.log('number has to be greater than 0');
    }
    num = Math.ceil(num); // rounding

    if (num === 1)
        return num;
    else
        return num * factorial(num-1);

}

console.log(factorial(4));