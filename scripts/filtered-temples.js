// Get dynamic date in the footer tag

document.addEventListener("DOMContentLoaded", () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Inject the year into the span element
    document.getElementById("currentyear").textContent = year;

    // Inject the last modified date into the paragraph element
    document.getElementById("lastmodified").textContent = `Last modification: ${document.lastModified}`;
});
// Apply a responsive humburger effect to your existing navigation menu using Javascript

const nav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");


hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});
// Copy the following code array named "temples" which consists of a sample of temple objects and place the array into your own JavaScript file.

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },



    // Add more temple objects here...
    {
        templeName: "Kinshasa Democratic Republic of Congo",
        location: "Kinshasa, Democratic Republic oF Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3526-thumb.jpg"
    },
    {
        templeName: "Accra Ghana ",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa ",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 25",
        area: 19184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },

];

//Select the container element
const container = document.getElementById("image");

// Loop through the array and create "temple cards" for each temple by displaying:
function displayTemples(temples) {
    container.innerHTML = "";
    temples.forEach(temple =>
    // Create card container
    {
        const cardFiltered = document.createElement("div");
        //Add a style
        cardFiltered.style.backgroundColor = "#f0ebeb";




        //The name of the temple.
        //The location of the temple.
        //The date the temple was dedicated.
        // Total area of the temple in square feet.
        // The provided image of the temple(an absolute address), making sure to include an appropriate alt value such as the name of the temple.
        // Use native lazy loading for each temple image.

        cardFiltered.innerHTML = `
            <h3>${temple.templeName}</h3>
    
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">`;
        container.appendChild(cardFiltered);


    });
}

//Respond to the main navigation menu items by filtering and displaying the temples as follows:

// Old – temples built before 1900
document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    displayTemples(oldTemples);
});



//New – temples built after 2000
document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    displayTemples(newTemples);
});

//Large – temples larger than 90,000 square feet
document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});


//Small – temples smaller than 10,000 square feet
document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});


// Home – displays all the temples stored in the array.
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
displayTemples(temples);


//Extra : An other to loop through the array
//temples.forEach((temple) => {
// const card = document.createElement("div")
// card.classList.add("temple-card");
//const nameHeading = document.createElement("h2");
// nameHeading.textContent = `${temple.templeName}`;



//const locationTemple = document.createElement("p");
//locationTemple.textContent = `Location: ${temple.location}`;




//const dateDedication = document.createElement("p");
//dateDedication.textContent = `Dedicated: ${temple.dedicated} `;



//const areaTemple = document.createElement("p");
//areaTemple.textContent = `Area: ${temple.area} sq meters`;



//const img = document.createElement("img");
//img.src = temple.imageUrl;
//img.alt = temple.name;
//img.loading = "lazy";

// Append the card to the main page container
//card.appendChild(nameHeading);
//card.appendChild(locationTemple);
//card.appendChild(dateDedication);
//card.appendChild(areaTemple);
//card.appendChild(img);
// Append the card to the main page container
//container.appendChild(card);

//})

