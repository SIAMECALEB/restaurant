import pizzaImg from './pizza.jpg';
import saladImg from './salad.jpg';
import salmonImg from './salmon.jpg';
import cakeImg from './cake.jpg';

export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const headline = document.createElement('h1');
  headline.textContent = "Our Menu";
  menuDiv.appendChild(headline);

  const dishes = [
    { name: "Margherita Pizza", price: "$12", img: pizzaImg, description: "Classic pizza with fresh tomatoes, mozzarella, and basil." },
    { name: "Caesar Salad", price: "$8", img: saladImg, description: "Crisp romaine with Caesar dressing, croutons, and parmesan." },
    { name: "Grilled Salmon", price: "$18", img: salmonImg, description: "Fresh salmon grilled to perfection with lemon butter." },
    { name: "Chocolate Lava Cake", price: "$7", img: cakeImg, description: "Warm chocolate cake with a gooey molten center." }
  ];

  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  dishes.forEach(dish => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const img = document.createElement('img');
    img.src = dish.img;
    img.alt = dish.name;
    card.appendChild(img);

    const dishName = document.createElement('h2');
    dishName.textContent = dish.name;
    card.appendChild(dishName);

    const description = document.createElement('p');
    description.textContent = dish.description;
    card.appendChild(description);

    const price = document.createElement('p');
    price.textContent = dish.price;
    price.classList.add('price');
    card.appendChild(price);

    menuGrid.appendChild(card);
  });

  menuDiv.appendChild(menuGrid);
  content.appendChild(menuDiv);
}
