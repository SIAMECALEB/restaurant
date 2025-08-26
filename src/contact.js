export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactSection = document.createElement("div");
  contactSection.classList.add("contact");

  // Title
  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  contactSection.appendChild(title);

  // Contact info
  const info = document.createElement("div");
  info.classList.add("contact-info");
  info.innerHTML = `
    <p>📍 123 Food Street, Flavor Town</p>
    <p>📞 +260 123 456 789</p>
    <p>✉️ info@myrestaurant.com</p>
  `;
  contactSection.appendChild(info);

  // Contact form
  const form = document.createElement("form");
  form.classList.add("contact-form");

  form.innerHTML = `
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  `;
  contactSection.appendChild(form);

  // Map placeholder
  const map = document.createElement("div");
  map.classList.add("map");
  map.textContent = "📍 Map Placeholder (Embed Google Maps here)";
  contactSection.appendChild(map);

  content.appendChild(contactSection);
}