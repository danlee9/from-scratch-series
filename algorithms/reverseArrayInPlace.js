// function reverseArrayInPlace(arr) {
//     // let container = [];
//     // let len = arr.length;
//     // for (let i=0; i<len; i++) {
//     //     container.push(arr.pop());
//     // }
//     // for (let i=0; i<len; i++) {
//     //     arr.push(container.shift());
//     // }
//     let finalIndex = arr.length - 1;
//     let operationsLength = Math.floor(arr.length/2);
//     for (let i=0; i<operationsLength; i++) {
//         let tmp = arr[finalIndex-i];
//         arr[finalIndex-i] = arr[i];
//         arr[i] = tmp;
//     }
//     return arr;
// }

function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
      var tempVar = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = tempVar;
    }
    
    return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8]));