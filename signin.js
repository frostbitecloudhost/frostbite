// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to update the sign-in text based on user authentication
function updateSignInText() {
    var signInTextElement = document.getElementById("signInText");

    // Get the current user from Firebase Authentication
    var user = auth.currentUser;

    if (user) {
        // User is signed in
        signInTextElement.textContent = "Profile";
    } else {
        // User is signed out
        signInTextElement.textContent = "Sign In";
    }
}

// Add an event listener to wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    // Add an observer to handle authentication state changes
    onAuthStateChanged(auth, function (user) {
        // Update UI on authentication state changes
        updateSignInText();
    });
});
