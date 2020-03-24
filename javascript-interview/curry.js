function getProduct(num1, num2) {
    return num1 * num2;
}

function multiplier(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

console.log(getProduct(5, 15));
console.log(multiplier(5)(15));


function getTravelTime(distance) {
    return function(speed) {
      return distance / speed;
    };
  }
   
  const travelTimeBosNyc = getTravelTime(400);
  const travelTimeMiamiAtlanta = getTravelTime(600);
  console.log(travelTimeBosNyc(100));