// Redirect to Personal Details Page
function redirectToPersonalDetails() {
  // Changes the current location of the browser to the Personal Details page
  window.location.href = "../pages/personal_details.html";
}

// Redirect to Recommended Page
function redirectToRecommended() {
  // Retrieve the input values for username and password from the HTML form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if both username and password are provided
  if (username && password) {
      // Show a welcome alert to the user with their username
      alert(`Welcome, ${username}! Redirecting to Recommended Page...`);
      // Redirect the browser to the Recommended page
      window.location.href = "../pages/recommended.html";
      localStorage.setItem("username", username); // Save to localStorage
  } else {
      // Alert the user to provide valid credentials if either field is empty
      alert("Please enter valid credentials.");
  }
}

