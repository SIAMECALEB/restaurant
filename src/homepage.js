import restaurantImg from './restaurant.jpg';
import './style.css';

export default function loadHomepage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  // Create a container div for background image
  const hero = document.createElement('div');
  hero.classList.add('hero');
  
  // Headline
  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Caleb's Restaurant!";
  hero.appendChild(headline);

  // Paragraph
  const paragraph = document.createElement('p');
  paragraph.textContent = "Experience the finest dining with fresh ingredients, amazing flavors, and a cozy atmosphere. Our chefs are passionate about making every meal memorable.";
  hero.appendChild(paragraph);

  // Explore button
  const exploreBtn = document.createElement('button');
  exploreBtn.textContent = "Explore";
  exploreBtn.classList.add('explore-btn');
  hero.appendChild(exploreBtn);

  content.appendChild(hero);

  // Set background image using inline style
  hero.style.backgroundImage = `url(${restaurantImg})`;
}

