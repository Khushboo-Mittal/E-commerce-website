// Functionality for quantity buttons
document.getElementById('plus1').addEventListener('click', function() {
    let quantity = document.getElementById('quantity1');
    quantity.textContent = parseInt(quantity.textContent) + 1;
});

document.getElementById('minus1').addEventListener('click', function() {
    let quantity = document.getElementById('quantity1');
    if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }
});

document.getElementById('plus2').addEventListener('click', function() {
    let quantity = document.getElementById('quantity2');
    quantity.textContent = parseInt(quantity.textContent) + 1;
});

document.getElementById('minus2').addEventListener('click', function() {
    let quantity = document.getElementById('quantity2');
    if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }
});

// Functionality for remove button
let removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        button.closest('.cart-item').remove();
    });
});

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
  }
