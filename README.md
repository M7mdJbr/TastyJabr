# TastyJabr. 🍳☕
> **3rd JavaScript project with coffee by ibnJabr**

An elegant, editorial-style culinary journal and interactive recipe search engine. Built with pure vanilla JavaScript, CSS variables, and styled as a minimalist chef's notebook to deliver a premium visual and user experience.

---

## 🎨 Design Philosophy & Concept
Unlike typical, overly saturated recipe applications, **TastyJabr.** focuses on a minimalist, newspaper/notebook aesthetic. 

* **Typography-First:** Utilizing a combination of expressive serifs and clean modern sans-serif fonts to mimic high-end culinary magazines.
* **Muted Color Palette:** An ink-and-paper aesthetic (`#fdfbf7` and `#1a1f2c`) with subtle touches of sage green and terracotta to keep the interface focused on beautiful ingredient photography.
* **Focus on Fluidity:** Full focus styling, custom link animations, and subtle image grayscale transformations upon hovering.

---

## ✨ Features

* **Universal API Search:** Driven by a robust `async/await` Fetch architecture connecting to *TheMealDB API*, allowing users to look up ingredients, specific dishes, or custom terms instantly.
* **Fluid Quick Filters:** Dynamic category switching (`Beef`, `Chicken`, `Pasta`, etc.) that seamlessly resets layouts without annoying page reloads.
* **The "Chef's Notebook" Modal:** A tailored popup card displaying ingredients, exact measurements, and step-by-step cooking instructions with clear formatting and blur background protection.
* **Keyboard Navigation:** Accessibility matters—the modal automatically closes upon pressing the `Escape` key using global window listeners.
* **Clean Footer Branding:** Signifying a dedicated development milestone with a custom editorial footer signature.

---

## 💻 Tech Stack

* **HTML5:** Semantic architecture optimized for structure and clean accessibility.
* **CSS3:** Custom variables (`:root`), Grid layout systems, Flexbox alignment, and responsive media queries.
* **JavaScript (ES6+):** * Asynchronous operations (`async/await`, `fetch`).
  * Dynamic DOM manipulation and element rendering.
  * Optimized event handling via *Event Delegation* on interactive grids.
  * Window event listener capturing for smooth keyboard controls (`keydown`).

---

## 📂 Project Structure

```text
TastyJabr/
│
├── index.html     # Semantic layout and modal wrapper
├── style.css      # Editorial styling, grid frameworks, and variables
└── script.js     # API engine, rendering logic, and event listeners

```

---

## 🚀 Future Roadmap & Enhancements

* [ ] Add a "Save to Favorites" feature using local browser storage (`localStorage`).
* [ ] Integrate a "Print Recipe" button formatted perfectly for real-world kitchens.
* [ ] Implement an active ingredient checklist within the Modal view.

---

*Handcrafted during highly focused development intervals by **M7mdJbr**.* 🚀

```

---
