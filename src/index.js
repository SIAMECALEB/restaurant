import './style.css';                 // Import CSS
import loadHomepage from './homepage.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

// Cache navbar buttons
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

// Load homepage by default
loadHomepage();

// Tab switching logic
homeBtn.addEventListener('click', () => {
  loadHomepage();
});

menuBtn.addEventListener('click', () => {
  loadMenu();
});

aboutBtn.addEventListener('click', () => {
  loadContact();
});


