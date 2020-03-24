// function maxProfit(arr) {
//     let biggestProfit = -1;
//     let min, max, profit;
//     for (let i=0; i<arr.length-1; i++) {
//         min = arr[i];
//         max = Math.max(...arr.slice(i));
//         if (max >= min) {
//             profit = max - min;
//             if (profit > biggestProfit)
//                 biggestProfit = profit;
//         }
//     }
//     return biggestProfit;
// }

function maxProfit(pricesArr) {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    let tempProfit = -1;
    let changeBuyPrice = true;

    pricesArr.forEach((price, i) => {
        if (changeBuyPrice)
            buyPrice = price;
        sellPrice = pricesArr[i+1];
        if (buyPrice < sellPrice) {
            tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit)
                maxProfit = tempProfit;
            changeBuyPrice = false;
        } else {
            changeBuyPrice = true;
        }
    });

    return maxProfit;
}

// function maxStockProfit (pricesArr) {
//     var maxProfit = -1;
//     var buyPrice = 0;
//     var sellPrice = 0;
    
//     var changeBuyPrice = true;
    
//     for (var i = 0; i < pricesArr.length; i++) {
//       if (changeBuyPrice) buyPrice = pricesArr[i];
//       sellPrice = pricesArr[i + 1];
      
//       if (sellPrice < buyPrice) {
//         changeBuyPrice = true;
//       }
//       else {
//         var tempProfit = sellPrice - buyPrice;
//         if (tempProfit > maxProfit) maxProfit = tempProfit;
//         changeBuyPrice = false;
//       }
//     }
    
//     return maxProfit;
// }

// console.log(maxProfit([32,46,26,38,40,48,42]));
console.log(maxProfit([10,18,4,5,9,6,16,12]));