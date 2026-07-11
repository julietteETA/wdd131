
// Declare three variables that hold references to the input, button a,d list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("list");

// Create a li element that will hold each entry's chapter title and an associated delete button

const li = document.createElement("li");
// Create a delete button

const deleteButton = document.createElement("button")

// Populate the li element variable's textContent or innerHTML with the input value
li.textContent = input.value;
//Set the delete button's texContent
deleteButton.textContent = "❌";

//Append the delete button to the li element

li.appendChild(deleteButton);
// Append the li element to the unordered list in your HTML

li.append(li)
// Create a click event listener for the Add Chapter button with addEventListener 



button.addEventListener("click", function () {
    // Within the Add Chapter button click event function block (between the opening and closing braces of the callback function {...}),
    //complete the following tasks: 
    if (input.value.trim() !== "") { // Declare three variables that hold references to the input, button a,d list elements

        // Create a li element that will hold each entry's chapter title and an associated delete button

        const li = document.createElement("li");
        // Create a delete button

        const deleteButton = document.createElement("button")

        // Populate the li element variable's textContent or innerHTML with the input value
        li.textContent = input.value;
        //Set the delete button's texContent
        deleteButton.textContent = "❌";

        //Append the delete button to the li element

        li.appendChild(deleteButton);
        // Append the li element to the unordered list in your HTML

        li.append(li)
        // Create a click event listener for the Add Chapter button with addEventListener 
    }
    else { console.log("please select a scripture") }

});
//Add an event listener to the delete button that removes the li element when clicked
deleteButton.addEventListener("click", function () { list.removeChild(li); input.focus(); });
// Change the input value to an empty string to clean up the interface for the user 
input.value = "";
//After processing, the focus (active cursor)should be sent to the input element

input.focus();



