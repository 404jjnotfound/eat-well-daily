/*=========================================== MEALS ===========================================*/
const diets = [
  // Anti-inflammatory
  [
    {
      name: "Spinach, Lima Bean & Crispy Pancetta Pasta",
      cookingTime: 20,
      img: "../images/anti-inflammatory/meal01.png",
      alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
      calories: "477",
      rating: "5.0",
      ratingCount: "8",
    },
    {
      name: "Italian Wedding Soup",
      cookingTime: 20,
      img: "../images/anti-inflammatory/meal02.png",
      alt: "Italian Wedding Soup meal",
      calories: "415",
      rating: "4.7",
      ratingCount: "34",
    },
    {
      name: "Spinach & Artichoke Dip Pasta",
      cookingTime: 20,
      img: "../images/anti-inflammatory/meal03.png",
      alt: "Spinach & Artichoke Dip Pasta meal",
      calories: "371",
      rating: "4.6",
      ratingCount: "33",
    },
    {
      name: "Hearty Chickpea & Spinach Stew",
      cookingTime: 30,
      img: "../images/anti-inflammatory/meal04.png",
      alt: "Hearty Chickpea & Spinach Stew meal",
      calories: "401",
      rating: "4.8",
      ratingCount: "48",
    },
    {
      name: "Kale & Avocado Salad with Blueberries & Edamame",
      cookingTime: 20,
      img: "../images/anti-inflammatory/meal05.png",
      alt: "Kale & Avocado Salad with Blueberries & Edamame meal",
      calories: "376",
      rating: "4.8",
      ratingCount: "16",
    },
    {
      name: "Quinoa Chili with Sweet Potatoes",
      cookingTime: 30,
      img: "../images/anti-inflammatory/meal06.png",
      alt: "Quinoa Chili with Sweet Potatoes meal",
      calories: "346",
      rating: "4.4",
      ratingCount: "9",
    },
    {
      name: "Salt & Vinegar Sheet-Pan Chicken & Brussels Sprouts",
      cookingTime: 45,
      img: "../images/anti-inflammatory/meal07.png",
      alt: "Salt & Vinegar Sheet-Pan Chicken & Brussels Sprouts meal",
      calories: "387",
      rating: "4.5",
      ratingCount: "10",
    },
    {
      name: "Baked Eggs in Tomato Sauce with Kale",
      cookingTime: 30,
      img: "../images/anti-inflammatory/meal08.png",
      alt: "Baked Eggs in Tomato Sauce with Kale meal",
      calories: "344",
      rating: "4.6",
      ratingCount: "10",
    },
  ],

  // Gluten-free
  [
    {
      name: "Creamy White Chili with Cream Cheese",
      cookingTime: 30,
      img: "../images/gluten-free/meal01.png",
      alt: "Creamy White Chili with Cream Cheese meal",
      calories: "313",
      rating: "4.3",
      ratingCount: "39",
    },
    {
      name: "Chhole (Chickpea Curry)",
      cookingTime: 20,
      img: "../images/gluten-free/meal02.png",
      alt: "Chhole (Chickpea Curry) meal",
      calories: "278",
      rating: "4.7",
      ratingCount: "73",
    },
    {
      name: "Chipotle Chicken Quinoa Burrito Bowl",
      cookingTime: 30,
      img: "../images/gluten-free/meal03.png",
      alt: "Chipotle Chicken Quinoa Burrito Bowl meal",
      calories: "452",
      rating: "4.7",
      ratingCount: "46",
    },
    {
      name: "Smoky Collards & Shrimp with Cheesy Grits",
      cookingTime: 45,
      img: "../images/gluten-free/meal04.png",
      alt: "Smoky Collards & Shrimp with Cheesy Grits meal",
      calories: "443",
      rating: "4.2",
      ratingCount: "12",
    },
    {
      name: "Chicken Hummus Bowls",
      cookingTime: 25,
      img: "../images/gluten-free/meal05.png",
      alt: "Chicken Hummus Bowls meal",
      calories: "485",
      rating: "4.7",
      ratingCount: "26",
    },
  ],

  // Vegan
  [
    {
      name: "White Bean & Veggie Salad",
      cookingTime: 10,
      img: "../images/vegan/meal01.png",
      alt: "White Bean & Veggie Salad meal",
      calories: "360",
      rating: "4.7",
      ratingCount: "20",
    },
    {
      name: "Grilled Cauliflower Steaks with Almond Pesto & Butter Beans",
      cookingTime: 25,
      img: "../images/vegan/meal02.png",
      alt: "Grilled Cauliflower Steaks with Almond Pesto & Butter Beans meal",
      calories: "427",
      rating: "4.7",
      ratingCount: "9",
    },
    {
      name: "Tofu Poke",
      cookingTime: 30,
      img: "../images/vegan/meal03.png",
      alt: "Tofu Poke meal",
      calories: "262",
      rating: "5.0",
      ratingCount: "1",
    },
  ],

  // Vegetarian
  [
    {
      name: "Chickpea Pasta with Mushrooms & Kale",
      cookingTime: 30,
      img: "../images/vegetarian/meal01.png",
      alt: "Chickpea Pasta with Mushrooms & Kale meal",
      calories: "340",
      rating: "4.1",
      ratingCount: "14",
    },
    {
      name: "Red Lentil Soup with Saffron",
      cookingTime: 40,
      img: "../images/vegetarian/meal02.png",
      alt: "Red Lentil Soup with Saffron meal",
      calories: "280",
      rating: "4.6",
      ratingCount: "21",
    },
  ],
];

let name, img, alt, calories, rating, ratingCount;
let mealCount = 0;

// Assign every meal content to every meal element
for (let diet = 0; diet < diets.length; ++diet) {
  for (let meal = 0; meal < diets[diet].length; ++meal) {
    name = diets[diet][meal].name;
    cookingTime = diets[diet][meal].cookingTime;
    img = diets[diet][meal].img;
    alt = diets[diet][meal].alt;
    calories = diets[diet][meal].calories;
    rating = diets[diet][meal].rating;
    ratingCount = diets[diet][meal].ratingCount;

    document.querySelector(
      `.meals .meal:nth-child(${++mealCount})`
    ).innerHTML = `
            <div>
                <img class="meal__image" src="${img}" alt="${alt}"/>
            </div>

            <div class="meal__content">
                <p class="meal__name">${name}</p>
                <ul class="meal__attributes">
                    <li class="meal__attribute">
                        <ion-icon class="meal__icon" name="flame-outline"></ion-icon>
                        <span><strong><span class="calorie-count">${calories}</span></strong> calories</span>
                    </li>

                    <li class="meal__attribute">
                        <ion-icon class="meal__icon" name="time-outline"></ion-icon>
                        <span><strong>${cookingTime}</strong> minutes (cooking time)</span>
                    </li>

                    <li class="meal__attribute">
                        <ion-icon class="meal__icon" name="star-outline"></ion-icon>
                        <span><strong><span class="rating">${rating}</span></strong> rating (<span class="rating-count">${ratingCount}</span>)</span>
                    </li>
                </ul>
            </div>         
        `;
  }
}

/*=========================================== TABS LOGIC ===========================================*/
// Display meals based on the specified diet
// Get elements
const mealsEl = document.querySelectorAll(".meals .meal"); // get all meals together
const tabsEl = document.querySelector(".meals .tabs"); // get tabs parent element
const tabLinksEl = document.querySelectorAll(".meals .tab-link"); // get all tabs together
const tab1El = document.querySelector(".meals .tab-link:nth-child(1)");
const tab2El = document.querySelector(".meals .tab-link:nth-child(2)");
const tab3El = document.querySelector(".meals .tab-link:nth-child(3)");
const tab4El = document.querySelector(".meals .tab-link:nth-child(4)");

const updateStyle = (tabEl) => {
  for (let tab = 0; tab < tabLinksEl.length; ++tab) {
    if (tabLinksEl[tab].classList.contains("tab-link-full")) {
      tabLinksEl[tab].classList.remove("tab-link-full");
      break;
    }
  }
  tabEl.classList.add("tab-link-full");
};

// Set initial
mealsEl.forEach((meal) => {
  if (!meal.classList.contains("anti-inflammatory")) {
    meal.classList.add("hidden");
  }
});

// Anti-inflammatory tab clicked
tab1El.addEventListener("click", () => {
  mealsEl.forEach((meal) => {
    if (!meal.classList.contains("anti-inflammatory")) {
      meal.classList.add("hidden");
    } else {
      meal.classList.remove("hidden");
    }
  });

  // Update CSS
  updateStyle(tab1El);
});

// Gluten-free tab clicked
tab2El.addEventListener("click", () => {
  mealsEl.forEach((meal) => {
    if (!meal.classList.contains("gluten-free")) {
      meal.classList.add("hidden");
    } else {
      meal.classList.remove("hidden");
    }
  });

  // Update CSS
  updateStyle(tab2El);
});

// Vegan tab clicked
tab3El.addEventListener("click", () => {
  mealsEl.forEach((meal) => {
    if (!meal.classList.contains("vegan")) {
      meal.classList.add("hidden");
    } else {
      meal.classList.remove("hidden");
    }
  });

  // Update CSS
  updateStyle(tab3El);
});

// Vegetarian tab clicked
tab4El.addEventListener("click", () => {
  mealsEl.forEach((meal) => {
    if (!meal.classList.contains("vegetarian")) {
      meal.classList.add("hidden");
    } else {
      meal.classList.remove("hidden");
    }
  });

  // Update CSS
  updateStyle(tab4El);
});

/*=========================================== MODAL LOGIC ===========================================*/
// Get elements
const modal = document.getElementById("meal-modal");
const modalImg = document.getElementById("modal__img");
const modalTitle = document.getElementById("modal__title");
const modalNutriInfo = document.getElementById("modal__nutri-info");
const modalDesc = document.getElementById("modal__description");
const closeBtn = document.querySelector(".close");
const viewMoreBtn = document.getElementById("view-more-button");
const viewLessBtn = document.getElementById("view-less-button");
const moreInfo = document.getElementById("more-info");
const modalIngredients = document.getElementById("modal__ingredients");
const modalInstructions = document.getElementById("modal__instructions");

// Every meal card clicked
mealsEl.forEach((card) => {
  card.addEventListener("click", () => {
    modalImg.src = card.getAttribute("data-img");
    modalTitle.textContent = card.getAttribute("data-name");
    modalNutriInfo.textContent = card.getAttribute("data-nutrition");
    modalDesc.textContent = card.getAttribute("data-description");
    modalIngredients.innerHTML = card
      .getAttribute("data-ingredients")
      .split("#br")
      .map((i) => `<li>${i}</li>`)
      .join("");
    modalInstructions.innerHTML = card
      .getAttribute("data-instructions")
      .split("#br")
      .map((i) => `<li>${i}</li>`)
      .join("");

    moreInfo.classList.remove("display"); // hide more info
    modal.classList.add("show"); // show modal
    viewMoreBtn.style.display = "block"; // display view more button
  });
});

// View more button clicked
viewMoreBtn.addEventListener("click", () => {
  moreInfo.classList.add("display"); // display more info
  viewMoreBtn.style.display = "none"; // hide view more button
});

// View less button clicked
viewLessBtn.addEventListener("click", () => {
  moreInfo.classList.remove("display"); // hide more info
  viewMoreBtn.style.display = "block"; // display view more button
});

// Close button clicked
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show"); // hide modal
});

// Outside of modal clicked => hide modal
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});
