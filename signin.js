// signin.js

// Function to update the sign-in text based on user authentication
function updateSignInText() {
    var signInTextElement = document.getElementById("signInText");

    // Get the current user from Firebase Authentication
    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in
        signInTextElement.textContent = "Profile";
    } else {
        // User is signed out
        signInTextElement.textContent = "Sign In";
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    updateSignInText();
});

// Rest of your existing JavaScript code specific to signin.js
// ...
