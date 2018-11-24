/* Toggle Links for mobile screen */
const toggleLink = document.querySelector('.toggle-link');
const navLinks = document.querySelectorAll('.nav-link');
toggleLink.addEventListener('click', function (event) {
    navLinks.forEach(function (link) {
        link.classList.toggle('show-link');
    })
})

/*  */

/* create constants of main navigation links */

const productLink = document.getElementById('product-link');
const testimonialLink = document.getElementById('testimonial-link');
const photoBoothLink = document.getElementById('photo-booth-link');
const aboutLink = document.getElementById('about-link');

/** create constants for the page sections */

const productSection = document.getElementById('product-section');
const testimonialSection = document.getElementById('testimonial-section');
const photoBoothSection = document.getElementById('photo-booth-section');
const aboutSection = document.getElementById('about-section');

testimonialSection.style.display = 'none';
photoBoothSection.style.display = 'none';
aboutSection.style.display = 'none';

/** add event listeners to the links to display particular section and hide others */

productLink.addEventListener('click', function (event) {
    productSection.style.display = 'block';
    testimonialSection.style.display = 'none';
    photoBoothSection.style.display = 'none';
    aboutSection.style.display = 'none';
})
testimonialLink.addEventListener('click', function (event) {
    productSection.style.display = 'none';
    testimonialSection.style.display = 'block';
    photoBoothSection.style.display = 'none';
    aboutSection.style.display = 'none';
})
photoBoothLink.addEventListener('click', function (event) {
    productSection.style.display = 'none';
    testimonialSection.style.display = 'none';
    photoBoothSection.style.display = 'block';
    aboutSection.style.display = 'none';
})
aboutLink.addEventListener('click', function (event) {
    productSection.style.display = 'none';
    testimonialSection.style.display = 'none';
    photoBoothSection.style.display = 'none';
    aboutSection.style.display = 'block';
})