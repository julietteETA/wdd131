// Get dynamic date in the footer tag

document.addEventListener("DOMContentLoaded", () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Inject the year into the span element
    document.getElementById("currentyear").textContent = year;

    // Inject the last modified date into the paragraph element
    document.getElementById("lastmodified").textContent = `Last Visit: ${document.lastModified}`;
});
// Apply a responsive humburger effect to your existing navigation menu using Javascript

const nav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");


hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});




//3.Codes for find you House page

const houses = [
    {
        houseNumber: "n°1",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CxciqIVFlJ-wQK49TatsuH3YnDHHvFNrITSd4Eot3g&s=10"
    },
    {
        houseNumber: "n°2",
        location: "Gombe, Kinshasa",
        publication: "2026, August, 6, 2pm",
        action: "sale",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4zdQlI1OTCWLNTk5mtciWae5eM_dVapk47YMDYIhpg&s=10"
    }



    ,
    {
        houseNumber: "n°3",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUzwMwktuAtO4VEC3Ic_H3DxOGHphNvMo8VLyK03rqQ&s=10"
    }
    ,
    {
        houseNumber: "n°4",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6Yx8KQvzuIV4yihxSqCWSXOWwqLtK6DD2AIxp2AhAQ&s"
    }
    ,
    {
        houseNumber: "n°5",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQgeb0vttS48bjnX7fg3tNUP3ghjYM913xb91CCO0Jg&s=10"
    }
    ,
    {
        houseNumber: "n°6",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2fepQnBQpcgfM8jF3qxSAT1mpeGSXh2gCzp8tBj8vA&s=10"
    }
    ,
    {
        houseNumber: "n°7",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXJLwSivdrVJBCK8hb1fb-9RFUe8Ar8TNuGshJ-Esng&s=10"
    }
    ,
    {
        houseNumber: "n°8",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjJdVLplf554hrt7SfHGzaktBecpobb7a61KwdiCcYg&s=10"
    }

    ,
    {
        houseNumber: "n°9",
        location: "Ngaliema, Kinshasa",
        publication: "2026, August, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "No",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUklzQHuRAXVnMblXVL26xbFob9odRteai1J2wlLudQ&s=10"
    }
    ,
    {
        houseNumber: "n°10",
        location: "Bandalungwa, Kinshasa",
        publication: "2026, July, 7, 2pm",
        action: "rent",
        price: 100000,
        area: "10 / 20",
        composition: "2bedRooms, 1 livingRooms, parking, kitchen",
        furniture: "Yes",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6gCE7oCVN7RP4QDMlvK1UPAmSG2vsSjxvnzBxSj92g&s=10"
    }


];

//Select the container element
const container = document.getElementById("image");

function displayHouses(houses) {
    container.innerHTML = "";
    houses.forEach(house =>
    // Create card container
    {
        const cardFiltered = document.createElement("div");
        //Add a style
        cardFiltered.style.backgroundColor = "#b0eefe";




        cardFiltered.innerHTML = `
            <h3>${house.houseNumber}</h3>
    
            <p><strong>Location:</strong> ${house.location}</p>
            <p><strong>Publication:</strong> ${house.publication}</p>
            <p><strong>Action:</strong> ${house.action}</p>
            <p><strong>Price:</strong> ${house.price} FC</p>
            <p><strong>Size:</strong> ${house.area} sq ft</p>
            <p><strong>Composition:</strong> ${house.composition}</p>
            <p><strong>Furniture:</strong> ${house.furniture}</p>
            <img src="${house.imageUrl}" alt="${house.houseNumber}" loading="lazy" >
            
            `;
        container.appendChild(cardFiltered);


    });
}
displayHouses(houses);







// For create an account Use JavaScript to populate the Product Name options where the array's name field is used for the select option display and the array's id is used for the value field.

const categories = [

    {
        id: 1,
        name: "Client"

    },
    {
        id: 2,
        name: " Real Estate Commission Agent"

    },
    {
        id: 3,
        name: "Real Estate Owner"

    }

];

//Javascript:
// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    populateCategory();

});

/**
 * Populates the product select dropdown menu
 */
function populateCategory() {
    // Replace 'product-select' with the actual ID of your HTML select element
    const categorySelect = document.getElementById("register");

    if (!categorySelect) return;

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;       // Sets the value field to the ID
        option.textContent = category.name; // Sets the display text to the name
        categorySelect.appendChild(option);
    });
}

/**
 * Tracks and increments the review counter in localStorage
 */
// Initialize display element
const visitDisplay = document.querySelector(".visits");
// Get the stored value

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

//  increment the number of visits by one.
numVisits++;
// 5store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);






