// Get references to the form and the review list container
const reviewForm = document.getElementById('reviewForm');
const reviewList = document.getElementById('reviewList');

// Listen for the form submission
reviewForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the user's name and review
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    // Create a new review element
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `
        <h4>${name}</h4>
        <p>${review}</p>
        <hr>
    `;

    // Add the review to the review list
    reviewList.appendChild(reviewItem);

    // Clear the form fields
    reviewForm.reset();
});

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        formResponse.style.display = "block"; // Show thank-you message
        contactForm.reset(); // Reset the form fields
    });
});

