// JavaScript for Carousel Functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;
let isPaused = false; // To keep track of whether the carousel is paused

// Function to show the carousel item based on the current index
function showItem(index) {
    // Update active class on items
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) item.classList.add('active');
    });

    // Update active class on dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) dot.classList.add('active');
    });

    // Update the transform style to show the correct slide
    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}

// Function to show the next item
function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

// Function to start the auto-slide timer
function startAutoSlide() {
    if (!isPaused) { // Only start if not paused
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextItem, 8000); // Set interval to slide every 6 seconds
    }
}

// Function to pause the auto-slide timer
function pauseAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the interval to pause auto-slide
    isPaused = true;
}

// Function to resume the auto-slide timer
function resumeAutoSlide() {
    isPaused = false;
    startAutoSlide();
}

// Event listeners for arrow buttons
document.querySelector('.next').addEventListener('click', () => {
    nextItem();
    startAutoSlide(); // Restart slide after manual navigation
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
    startAutoSlide(); // Restart slide after manual navigation
});

// Event listeners for dots
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        showItem(currentIndex);
        startAutoSlide(); // Restart slide after dot click
    });
});

// Event listeners to pause/resume auto-slide on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', pauseAutoSlide);
carouselContainer.addEventListener('mouseleave', resumeAutoSlide);

// Start the auto-slide timer initially
startAutoSlide();

// hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


