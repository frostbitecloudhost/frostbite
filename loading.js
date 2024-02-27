// loading.js

document.addEventListener("DOMContentLoaded", function() {
  var loadingScreen = document.getElementById("loading-screen");
  var progressBar = document.getElementById("loading-progress");

  setTimeout(function() {
    document.body.classList.add("loaded");
  }, 1000);

  window.onload = function() {
    progressBar.style.width = "100%";
    setTimeout(function() {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.visibility = "hidden";
      redirectToOriginalPage();
    }, 500);
  };
});

function redirectToOriginalPage() {
  // Wait for a short delay before redirecting to ensure that the loading screen is fully hidden
  setTimeout(function() {
    window.location.href = "original-page.html"; // Replace "original-page.html" with the URL of your original page
  }, 1000); // Adjust the delay as needed
}