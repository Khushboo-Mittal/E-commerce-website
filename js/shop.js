// Sample data for each category
const categories = {
    footwear: [
      '../assets/image1.png',
      '../assets/image2.png',
      '../assets/image3.png',
      '../assets/image4.png',
    ],
    fragrance: [
      '../assets/image1.png',
      '../assets/image4.png',
      '../assets/image5.png',
    ],
    apparels: [
      '../assets/image1.png',
      '../assets/image2.png',
      '../assets/image3.png',
    ],
    bags: [
      '../assets/image1.png',
      '../assets/image2.png',
      '../assets/image6.png',
    ],
  };
  
  // Selectors
const imageGallery = document.querySelector('.image-gallery');
const categoriesDiv = document.querySelector('.categories');

// Load Images for Selected Category
function loadImages(category) {
  // Clear existing images
  imageGallery.innerHTML = '';

  // Add new images
  categories[category].forEach(imgSrc => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';

    const img = document.createElement('img');
    img.src = `../assets/${imgSrc}`;
    img.alt = category;

    imgContainer.appendChild(img);
    imageGallery.appendChild(imgContainer);
  });
}

// Initial Load
loadImages('footwear'); // Load default category

// Select all buttons in the category navbar
const buttons = document.querySelectorAll('.category-navbar button');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add the active class to the clicked button
        button.classList.add('active');
    });
});
