// signin.js

// Function to update the sign-in text based on user authentication
function updateSignInText() {
    // Simulate user authentication
    var isLoggedIn = /* Add your authentication logic here */ true;

    var signInTextElement = document.getElementById("signInText");

    if (isLoggedIn) {
        signInTextElement.textContent = "Profile";
    } else {
        signInTextElement.textContent = "Sign In";
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    updateSignInText();
});

// Rest of your existing JavaScript code specific to signin.js
// ...
