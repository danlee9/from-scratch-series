function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    const mid = Math.floor(arr.length / 2);
    const firstArr = mergeSort(arr.slice(0, mid));
    const secondArr = mergeSort(arr.slice(mid));
    return merge(firstArr, secondArr);
}

function merge(arr1, arr2) {
    const sortedArr = [];
    while (arr1.length || arr2.length) {
        if (!arr1.length || arr1[0] >= arr2[0])
            sortedArr.push(arr2.shift());
        else if (!arr2.length || arr1[0] < arr2[0])
            sortedArr.push(arr1.shift());
    }
    return sortedArr;
}

// function mergeSort (arr) {    
//     if (arr.length < 2) return arr;
//     var middleIndex = Math.floor(arr.length / 2);
//     var firstHalf = arr.slice(0, middleIndex);
//     var secondHalf = arr.slice(middleIndex);
    
//     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }
 
// function merge (array1, array2) { 
//     var result = [];
//     while (array1.length && array2.length) {
//       var minElem;
//       if (array1[0] < array2[0]) minElem = array1.shift();
//       else minElem = array2.shift();
//       result.push(minElem);
//     }
    
//     if (array1.length) result = result.concat(array1);
//     else result =result.concat(array2);
//     return result;
// }

console.log(mergeSort([6000,34,203,3,746,200,984,198,764,1,9,1]));
console.log(mergeSort([100,-20,40,-30,16,-100,-101]));