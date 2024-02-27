document.addEventListener("DOMContentLoaded", function() {
  // Get the loading screen element
  var loadingScreen = document.getElementById('loading-screen');

  // Add a class to trigger the animation after 5 seconds
  setTimeout(function() {
    loadingScreen.classList.add('redirect-animation');
  }, 5000); // Start animation after 5 seconds

  // Redirect to home.html after 6 seconds (5 seconds delay + 1 second animation duration)
  setTimeout(function() {
    window.location.href = 'home.html';
  }, 6000); // Redirect after 6 seconds
});