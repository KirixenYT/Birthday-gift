const validPassword = 'testing'; // Change this to your desired password

document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  const passwordInput = document.getElementById('passwordInput').value;
  const errorMessage = document.getElementById('errorMessage');
  
  if (passwordInput === validPassword) {
    window.location.href = 'visualgift.html'; // Redirect
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
  }
});

function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * +innerWidth + "px";

  let size = Math.random() * 12;
  let duration = Math.random() * 3;

  e.style.fontSize = 12 + "px";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(function () {
  stars();
}, 50);

// Wait for the page to fully load
window.addEventListener('load', function() {
  // Hide the loading overlay after 15 seconds
  setTimeout(function() {
    document.getElementById('loading-overlay').style.display = 'none';
    document.getElementById('content').style.display = 'block'; // Show the content
  }, 5000); // 15 seconds (15,000 milliseconds)
});
