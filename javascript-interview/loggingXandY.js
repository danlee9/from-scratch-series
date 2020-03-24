(function() {
    var x = y = 200;
  })();
   
  console.log('y: ', y);
  console.log('x: ', x);

  // x is undefined but y = 200. x is defined within iife but y is defined globally

//   ‘use strict’;
 
//   (function() {
//     var x = y = 200;
//   })();
   
//   console.log('y: ', y);
//   console.log('x: ', x);