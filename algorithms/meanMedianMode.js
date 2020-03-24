function getMean(arr) {
    let total = 0;
    let len = arr.length;
    arr.forEach(num => total += num);
    return total/len;
}

function getMedian(arr) {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    if (len % 2) {
        return arr[Math.floor(len/2)];
    } else {
        return (arr[len/2] + arr[len/2 -1]) / 2;
    }
}

function getMode(arr) {
    let obj = {};
    let modes = [];
    let maxFrequency = 0;
    arr.forEach(num => {
        if (!obj[num])
            obj[num] = 0;
        obj[num]++;
        if (obj[num] > maxFrequency) {
            maxFrequency = obj[num];
            modes = [num];
        } else if (obj[num] === maxFrequency) {
            modes.push(num);
        }
    });
    if (modes.length === Object.keys(obj).length)
        return [];
    return modes;
}

function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    };
}

// console.log(meanMedianMode([5,5,5,5,5,4,3,2,2,2,2,2,9]));
// console.log(meanMedianMode([1,2,3,4,5,4,6,1]));
console.log(meanMedianMode([9,10,23,10,23,9]));