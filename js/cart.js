
// <!-- META DATA -->
// <!--
// Developer Details:
//     Name: Tanisha Priya
//     Role: Frontend Developer

// Version:
//     Version: V 1.0 (2 December 2024)
//     Developers: Tanisha Priya, Prachi Tavse
//     Unit Test: Pass
//     Integration Test: Pass

// Description:
//     This is the shopping cart page for the Peoplely Fashion e-commerce platform.
//     Users can view their selected items, update quantities, and remove items from the cart.
//     The page displays item details like name, price, and expected delivery date, providing a clear and intuitive shopping experience.

// Dependencies:
//     - Environment:
//         - HTML5
//         - CSS3
//         - JavaScript (ES6+)

// To Run:
//     Open the `cart.html` file in a modern web browser.
// -->
// Function to update the cart item count
function updateCartCount() {
    const quantity1 = parseInt(document.getElementById('quantity1').textContent);
    const quantity2 = parseInt(document.getElementById('quantity2').textContent);
    const totalItems = quantity1 + quantity2;

    const cartLink = document.getElementById('cart-link');
    cartLink.textContent = `Cart (${totalItems})`;
}

// Functionality for quantity buttons
document.getElementById('plus1').addEventListener('click', function() {
    let quantity = document.getElementById('quantity1');
    quantity.textContent = parseInt(quantity.textContent) + 1;
    updateCartCount();
});

document.getElementById('minus1').addEventListener('click', function() {
    let quantity = document.getElementById('quantity1');
    if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }
    updateCartCount();
});

document.getElementById('plus2').addEventListener('click', function() {
    let quantity = document.getElementById('quantity2');
    quantity.textContent = parseInt(quantity.textContent) + 1;
    updateCartCount();
});

document.getElementById('minus2').addEventListener('click', function() {
    let quantity = document.getElementById('quantity2');
    if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }
    updateCartCount();
});

// Functionality for remove button
let removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        button.closest('.cart-item').remove();
    });
});

updateCartCount();

// --- Navbar Username Update ---
// Retrieve the username from localStorage
const username = localStorage.getItem("username") || "Chris Dave";

// Split the username into first and last names
const nameParts = username.split(" ");
const firstName = nameParts.slice(0, -1).join(" ") || "Chris"; // Everything except the last word
const lastName = nameParts.slice(-1).join(" ") || "DAVE"; // The last word

// Update the DOM elements with the names
document.querySelector(".first-name").textContent = firstName;
document.querySelector(".last-name").textContent = lastName;