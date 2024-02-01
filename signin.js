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

// Function to perform login
function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User logged in successfully
            console.log("Login successful:", userCredential.user);
            updateSignInText();
        })
        .catch((error) => {
            console.error("Login error:", error.message);
            alert("Login failed. Check your username and password.");
        });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    // Check authentication state on load
    updateSignInText();

    // Add event listener for login form
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        login(email, password);
    });

    // Add an observer to handle authentication state changes
    firebase.auth().onAuthStateChanged(function(user) {
        // Update UI on authentication state changes
        updateSignInText();
    });
});
