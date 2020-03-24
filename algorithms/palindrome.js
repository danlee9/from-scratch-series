function isPalindrome(string) {
    string = string.toLowerCase();
    let charsArr = string.split('');
    let validChars = 'qwertyuioplkjhgfdsazxcvbnm'.split('');
    let filteredArr = charsArr.filter(char => {
        return validChars.indexOf(char) > -1;
    });

    console.log(filteredArr);
    // let len = filteredArr.length;
    // let halfLen = Math.floor(len/2);
    // let secondHalf = filteredArr.slice(-1 * halfLen);
    // let firstHalf = filteredArr.slice(0, halfLen);

    // let secondHalfStr = secondHalf.reverse().join('');
    // let firstHalfStr = firstHalf.join('');

    // return firstHalfStr === secondHalfStr;

    return filteredArr.join('') === filteredArr.reverse().join('');
}

// console.log(isPalindrome(process.argv[2]));
console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("blah blah blah"));