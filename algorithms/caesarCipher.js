// function caesarCipher(text, num) {
//     let lowerCaseText = text.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let indexChange = num % 26;
    
//     let lowerCaseArr = lowerCaseText.split('');
//     let cipherArr = lowerCaseArr.map((char, i) => {
//         let index = alphabet.indexOf(char);
//         let capitalized = false;
//         if (char !== text[i])
//             capitalized = true;
        
//         if (index > -1) {
//             let newIndex = index + indexChange;
//             if (newIndex > 25)
//                 newIndex = newIndex - 26;
//             if (newIndex < 0)
//                 newIndex = newIndex + 26;
//             return capitalized ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
//         } else
//             return char;
//     });

//     return cipherArr.join('');
// }

function caesarCipher(str, num) {
    let lowerCaseStr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let indexChange = num % 26;
    let lowerCaseArr = lowerCaseStr.split('');
    let cipheredStr = '';

    for (let i=0; i<lowerCaseArr.length; i++) {
        let char = lowerCaseArr[i];
        let index = alphabet.indexOf(char);
        if (index > -1) {
            let newIndex = index + indexChange;
            if (newIndex > 25)
                newIndex = newIndex - 26;
            if (newIndex < 0)
                newIndex = newIndex + 26;
            str[i] === char ? cipheredStr += alphabet[newIndex] : cipheredStr += alphabet[newIndex].toUpperCase();
        } else
            cipheredStr += char;
    }
    return cipheredStr;
}

// function caesarCipher(str,num) {
//     num = num % 26;
//     var lowerCaseString = str.toLowerCase();
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     var newString = '';
    
//     for (var i = 0; i < lowerCaseString.length; i++) {
//       var currentLetter = lowerCaseString[i];
//       if (currentLetter === ' ') {
//         newString += currentLetter;
//         continue;
//       }
//       var currentIndex = alphabet.indexOf(currentLetter);
//       var newIndex = currentIndex + num;
//       if (newIndex > 25) newIndex = newIndex - 26;
//       if (newIndex < 0) newIndex = 26 + newIndex;
//       if (str[i] === str[i].toUpperCase()) {
//         newString += alphabet[newIndex].toUpperCase();
//       }
//       else newString += alphabet[newIndex];
//     };
    
//     return newString;
// }
// caesarCipher('Zoo Keeper', 2);

console.log(caesarCipher('Javascript Rules', -900));