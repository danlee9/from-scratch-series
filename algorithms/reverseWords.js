function reverseWords(str) {
    let words = str.split(' ');
    let revWords = words.map(word => {
        let revStr = '';
        for (let i=word.length-1; i>=0; i--)
            revStr += word[i];
        return revStr;
    });
    return revWords.join(' ');
}

console.log(reverseWords('this is a string of words'));