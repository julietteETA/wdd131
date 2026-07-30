
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

//Week5 Activity: Java localStorage
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});
button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});
//Create the displayList defined function that receives one parameter named item.
//Put all the code that builds a list item from the previous button click event listener into this new displayList function and use the item parameter as the input.A deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage.
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}
//Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array. 
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
//Define the getChapterList function to retrieve the localStorage item. No parameter is needed. Since this function returns data to be assigned to an array, use JSON.parse() to convert the string back. 
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

//Finally, define the deleteChapter function with a parameter named chapter that does three things.
//Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when you called the deleteChapter function. Use string.slice() method to extract the last character. 
chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
//Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed. 
chaptersArray = chaptersArray.filter((item) => item !== chapter);
//Call the setChapterList function to update the localStorage item.
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}