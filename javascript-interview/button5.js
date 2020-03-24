function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }
  
 createButtons();

 // Q: if you click on button 5 what will the page output?
 // A: '6'

 // Version where the buttons will have closure
 function createButtons2() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      let j = i;
      button.onclick = function() {
           alert('This is button ' + j);
      }
      body.appendChild(button);
    }
 }
  
 createButtons2();

 // Version using iife
 function createButtons3() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      (function(num) {
        button.onclick = function() {
            alert('This is button ' + num);
        }
      })(i)
      
      body.appendChild(button);
    }
 }
  
 createButtons3();

// Version using a helper function
 function createButtons4() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;     
      addClickFunctionality(button, i);
      body.appendChild(button);
    }
 }
  
 function addClickFunctionality(button, num) {
   button.onclick = function() {
     alert('This is button ' + num);
   }
 }
  
 createButtons4();

// Version using let which is block scoped instead of function scoped
function createButtons5() {
    for (let i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        button.onclick = function() {
            alert('This is button ' + i);
        }
        body.appendChild(button);
    }
}

createButtons5()