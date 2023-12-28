const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if (inputBox.value === ''){
        alert ("You must write something!"); //If the button pressed with no input, this will be exected
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //Input taken
        listContainer.appendChild(li); //A new row with the entered value created
        let span = document.createElement("span"); //creates a cross button
        span.innerHTML= "\u00d7";
        li.appendChild(span) 
    }

    inputBox.value = ""; //The input box is freed automaticaaly after button press.
    saveData(); //Data saved in the localstorage.
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //if check box clicked , the event will be marked checked
        saveData(); //Updation saved
    }
    else if ( e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //If cross button clicked, the event will be deleted
        saveData(); //Updation saved
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); //The browser will still show the list after being refreshed.