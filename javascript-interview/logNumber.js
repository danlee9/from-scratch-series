var num = 50;
 
function logNumber() {
    console.log(num);
    var num = 100;
}
 
logNumber(); //logs out undefined because within the function another var declaration exists which hoists it up to top of function scope