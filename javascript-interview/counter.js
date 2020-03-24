function counterInitialize() {
    var count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = counterInitialize();

console.log(counter());
console.log(counter());
console.log(counter());



function myFunc() {
    let count = 0;
    
    return function() {
      count++;
      return count;
    };
  }
   
  console.log(myFunc());
   
  const instanceOne = myFunc();
  const instanceTwo = myFunc();
   
  console.log('instanceOne: ', instanceOne());
  console.log('instanceOne: ', instanceOne());
  console.log('instanceOne: ', instanceOne());
  console.log('instanceTwo: ', instanceTwo());
  console.log('instanceTwo: ', instanceTwo());
  console.log('instanceOne: ', instanceOne());