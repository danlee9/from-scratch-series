function fizzBuzz(num) {
    for (let i=1; i<=num; i++) {
        let str = '';
        if (i % 3 === 0)
            str += 'Fizz';
        if (i % 5 === 0)
            str += 'Buzz';
        if (str)
            console.log(str);
        else
            console.log(i);
    }
}

fizzBuzz(30);