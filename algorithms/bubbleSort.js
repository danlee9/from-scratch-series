function bubbleSort(arr) {
    for (let i=0; i<arr.length-1; i++) {
        for (let j=0; j<arr.length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,-9,-12,-1,8]));

// function bubbleSort(array) {
//     for (var i = array.length; i > 0; i--) {
//       for (var j = 0; j < i; j++) {
//         if (array[j] > array[j + 1]) {
//           var temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }
    
//     return array;
// }
 
// bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);