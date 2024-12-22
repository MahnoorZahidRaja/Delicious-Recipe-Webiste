document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginResponse = document.getElementById("loginResponse");

    // Predefined credentials (for demonstration purposes only)
    const validCredentials = {
        username: "mahnoor",
        password: "mahnoor123",
    };

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === validCredentials.username && password === validCredentials.password) {
            loginResponse.style.display = "block";
            loginResponse.style.color = "green";
            loginResponse.textContent = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to the homepage
            }, 2000);
        } else {
            loginResponse.style.display = "block";
            loginResponse.style.color = "red";
            loginResponse.textContent = "Invalid username or password. Please try again.";
        }

        loginForm.reset(); // Clear the form
    });
});
