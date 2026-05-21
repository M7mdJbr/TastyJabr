const recipesGrid = document.querySelector("#recipes-grid");
const recipeInput = document.querySelector("#recipe-input");
const searchBtn = document.querySelector("#search-btn");
const filterButtons = document.querySelectorAll(".filter-btn");

const recipeModal = document.querySelector("#recipe-modal");
const modalDetails = document.querySelector("#modal-details");
const closeModal = document.querySelector("#close-modal");

async function getRecipes(word) {
  try {
    recipesGrid.innerHTML =
      "<p style='font-style: italic; color: #6e7787; text-align: center; grid-column: 1/-1;'>Gathering recipes from the kitchen...</p>";

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`,
    );
    const data = await response.json();

    if (!data.meals) {
      recipesGrid.innerHTML =
        "<p style='font-style: italic; color: #c95a42; text-align: center; grid-column: 1/-1;'>No recipes found. Try another word!</p>";
      return;
    } else {
      displayRecipes(data.meals, word);
    }
  } catch (error) {
    console.error("Error:", error);
    recipesGrid.innerHTML =
      "<p style='text-align: center; grid-column: 1/-1;'>Something went wrong.</p>";
  }
}

const displayRecipes = (meals, category) => {
  recipesGrid.innerHTML = "";
  meals.forEach((meal) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.dataset.id = meal.idMeal;

    card.innerHTML = `
            <div class="image-wrapper">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            </div>
            <span class="category-tag">${category}</span>
            <h3>${meal.strMeal}</h3>
        `;
    recipesGrid.appendChild(card);
  });
};

const performSearch = () => {
  const query = recipeInput.value.trim();
  if (query !== "") getRecipes(query);
};
searchBtn.addEventListener("click", performSearch);
recipeInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") performSearch();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");
    const category = button.getAttribute("data-category");
    getRecipes(category); 
  });
});

async function getRecipeDetails(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    const meal = data.meals[0];

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,
        );
      } else {
        break;
      }
    }

    modalDetails.innerHTML = `
            <h2 class="modal-recipe-title">${meal.strMeal}</h2>
            <p style="color: var(--accent-sage); font-weight: 700; margin-bottom: 1rem;">${meal.strCategory} / ${meal.strArea}</p>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width: 100%; height: 300px; object-fit: cover; border: var(--card-border); margin-bottom: 2rem;">
            
            <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 1rem;">Ingredients</h3>
            <ul style="list-style-type: none; margin-bottom: 2rem; padding-left: 10px;">
                ${ingredients.map((ing) => `<li style="margin-bottom: 0.5rem; border-bottom: 1px dashed #1a1f2c; padding-bottom: 5px;">📍 ${ing}</li>`).join("")}
            </ul>
            
            <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 1rem;">Instructions</h3>
            <p style="white-space: pre-line; line-height: 1.8; color: var(--text-ink);">${meal.strInstructions}</p>
        `;

    recipeModal.classList.add("show");
  } catch (error) {
    console.error("Error loading details:", error);
  }
}

recipesGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".recipe-card");
  if (card) {
    getRecipeDetails(card.dataset.id);
  }
});

closeModal.addEventListener("click", () => {
  recipeModal.classList.remove("show");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && recipeModal.classList.contains("show")) {
    recipeModal.classList.remove("show");
  }
});
getRecipes("cake");
