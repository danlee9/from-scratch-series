// function tripleAdd(num) {
//     const innerFunc = num2 => {
//         const innerInnerFunc = num3 => {
//             return num + num2 + num3;
//         }
//         return innerInnerFunc
//     }
//     return innerFunc;
// }

function tripleAdd(num) {
    return function(num2) {
        return function(num3) {
            return num + num2 + num3;
        }
    }
}

console.log(tripleAdd(4)(5)(10));