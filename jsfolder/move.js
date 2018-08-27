


//using the eventlistener to listen in for keypress event and rus function
moveTaskInput.addEventListener("keypress" , function() {
   view.displayTasks();
  }); 
    
  var view = {
         
         displayTasks: function() {

          // run the function if the character entered is 13 which is equivalent of enter
          if (event.charCode === 13 || event.keyIdentifier === 13)  {  
          var moveUl = document.querySelector("ul");
          var moveLi =document.createElement("li");
           moveLi.appendChild(document.createTextNode(moveTaskInput.value));
          moveTaskInput.value = "";
          var  binButton = document.createElement("button");
          binButton.innerHTML =  "&#xf2ed";
          binButton.className = "far";
          moveLi.id = 0;
          
         // appending list item and buttons to the unordered list
          moveLi.appendChild(binButton);
          moveUl.appendChild(moveLi); 
          moveUl.insertBefore(moveLi, moveUl.childNodes[0]);
         }     
      },
         
       deleteTasks: function() {
            var moveUl = document.querySelector("ul");
            moveUl.addEventListener("click",   function(event) {      
            var binClicked = event.target;
            if (binClicked.className === "far") {  
             moveUl.removeChild(document.getElementById(0));
             
        }
    });
      
  }
    
};

      view.deleteTasks();



