// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYisJ9j4FqUAxdZRLbXbV0lARN9LhM0Mw",
  authDomain: "frostbite-cloud.firebaseapp.com",
  databaseURL: "https://frostbite-cloud-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "frostbite-cloud",
  storageBucket: "frostbite-cloud.appspot.com",
  messagingSenderId: "140620606254",
  appId: "1:140620606254:web:6bb6f3ab549e920626e8bf",
  measurementId: "G-49M1EZ9D2F"
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
