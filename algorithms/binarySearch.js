function binarySearch(arr, key, sorted) {
    if (!sorted)
        arr.sort((a, b) => a - b);
    if (!arr.length)
        return false;
    
    let middle = Math.floor(arr.length / 2);
    // console.log(middle);
    let num = arr[middle];
    // console.log(num)
    if (num === key)
        return true;

    if (num < key)
        return binarySearch(arr.slice(middle + 1), key, true);
    else
        return binarySearch(arr.slice(0, middle), key, true);
}

console.log(binarySearch([5,7,12,16,6,1], 2));

// function binarySearch(numArray, key) {
//     var middleIdx = Math.floor(numArray.length / 2);
//     var middleElem = numArray[middleIdx];
    
//     if (middleElem === key) return true;
//     else if (middleElem < key && numArray.length > 1) {
//         return binarySearch(numArray.splice(middleIdx, numArray.length), key);
//     }
//     else if (middleElem > key && numArray.length > 1) {
//         return binarySearch(numArray.splice(0, middleIdx), key);
//     }
//     else return false;
// }
 
// binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);