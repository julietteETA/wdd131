// Get dynamic date in the footer tag

document.addEventListener("DOMContentLoaded", () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Inject the year into the span element
    document.getElementById("currentyear").textContent = year;

    // Inject the last modified date into the paragraph element
    document.getElementById("lastmodified").textContent = `Last modification: ${document.lastModified}`;
});


//Use JavaScript to populate the Product Name options where the array's name field is used for the select option display and the array's id is used for the value field.

const products = [
    
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

//Javascript:
// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    populateProducts();
    trackReviewCount();
});

/**
 * Populates the product select dropdown menu
 */
function populateProducts() {
    // Replace 'product-select' with the actual ID of your HTML select element
    const productSelect = document.getElementById("review");

    if (!productSelect) return;

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;       // Sets the value field to the ID
        option.textContent = product.name; // Sets the display text to the name
        productSelect.appendChild(option);
    });
}

/**
 * Tracks and increments the review counter in localStorage
 */
function trackReviewCount() {
    // Check if this page load is the result of a form submission
    // (Commonly handled by checking a URL parameter like '?submit=true' or checking sessionStorage)
    const urlParams = new URLSearchParams(window.location.search);
    const isFormSubmitted = urlParams.has("submit") || document.referrer.includes("review.html");

    if (isFormSubmitted) {
        // Retrieve the current count, defaulting to 0 if it doesn't exist
        let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

        // Increment the counter
        reviewCount += 1;

        // Save the updated count back to localStorage
        localStorage.setItem("reviewCount", reviewCount);

        console.log(`Total reviews completed: ${reviewCount}`);
    }
}
