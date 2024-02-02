import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function updateSignInText() {
    var signInTextElement = document.getElementById("signInText");

    var user = auth.currentUser;

    if (user) {
        signInTextElement.textContent = "Profile";
    } else {
        signInTextElement.textContent = "Sign In";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");
    onAuthStateChanged(auth, function (user) {
        updateSignInText();
    });
});
