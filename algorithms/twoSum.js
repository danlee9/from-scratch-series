// function twoSum(arr, sum) {
//     let pairs = [];
//     for (let len=arr.length, i=0; i<len; i++) {
//         for (let j=i+1; j<len-i; j++) {
//             if (arr[i] + arr[j] === sum)
//                 pairs.push([arr[i], arr[j]]);
//         }
//     }
//     return pairs;
// }

function twoSum(arr, sum) {
    let pairs = [];
    let hashTable = [];

    for (let i=0; i<arr.length; i++) {
        let currNum = arr[i];
        let counterpart = sum - currNum;
        if (hashTable.indexOf(counterpart) > -1) {
            pairs.push([currNum, counterpart]);
        }
        hashTable.push(currNum);
    }

    return pairs;
}

// function twoSum(numArray, sum) {
//     var pairs = [];
//     var hashTable = [];
   
//     for (var i = 0; i < numArray.length; i++) {
//       var currNum = numArray[i];
//       var counterpart = sum - currNum;
//       if (hashTable.indexOf(counterpart) !== -1) {
//         pairs.push([ currNum, counterpart ]);
//       }
//       hashTable.push(currNum);
//     }
    
//     return pairs;
// }

console.log(twoSum([1,6,4,5,3,3], 7));