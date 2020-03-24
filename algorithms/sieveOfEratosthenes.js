function sieveOfEratosthenes(num) {
    let arr = Array(num).fill(true);
    let sqrt = Math.sqrt(num);
    arr[0] = arr[1] = false;
    for (let i=2; i<=sqrt; i++) {
        let current = i;
        while (current <= num) {
            current += i;
            arr[current] = false;
        }
    }
    let primes = [];
    arr.forEach((boolean, index) => boolean ? primes.push(index) : null);
    return primes
}

console.log(sieveOfEratosthenes(200));

// function sieveOfEratosthenes(n) {
//     var primes = [];
//     for (var i = 0; i <= n; i++) {
//       primes[i] = true;
//     }
    
//     primes[0] = false;
//     primes[1] = false;
    
//     for (var i = 2; i <= Math.sqrt(n); i++) {
//       for (j = 2; i * j <= n; j++) {
//         primes[i * j] = false;
//       }
//     }
    
//     var result = [];
//     for (var i = 0; i < primes.length; i++) {
//       if (primes[i]) result.push(i);
//     }
    
//     return result;
//   }
   
//   sieveOfEratosthenes(49);