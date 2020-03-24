function harmlessRansomNote(noteText, magText) {
    let noteArr = noteText.split(' ');
    let magArr = magText.split(' ');
    
    let possible = true;

    for (let i=0; i<noteArr.length; i++) {
        let word = noteArr[i];
        let index = magArr.indexOf(word);
        if (index > -1) {
            magArr.splice(index, 1);
        } else {
            possible = false;
        }
    }

    // let magObj = {};
    // magArr.forEach(word => {
    //     if (!magObj[word])
    //         magObj[word] = 0;
    //     magObj[word]++;
    // });

    // let possible = true;
    // noteArr.forEach(word => {
    //     if (magObj[word]) {
    //         magObj[word]--;
    //         if (magObj[word] < 0)
    //             possible = false;
    //     } else {
    //         possible = false;
    //     }
    // });

    console.log(possible);

    return possible;

    
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');