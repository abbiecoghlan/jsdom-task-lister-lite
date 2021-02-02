document.addEventListener("DOMContentLoaded", function() {
  addingEventListener()
}); 


function addingEventListener(){
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    let userInput = event.target[0].value;
    let toDoUl = document.querySelector("#tasks");
    let newLi = document.createElement("li");
    newLi.innerText = userInput;
    toDoUl.append(newLi);
    event.target[0].value = "";
  });  
}

