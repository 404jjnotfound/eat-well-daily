/*==================================== MEALS ==================================== */
const diets = [
    // Anti-inflammatory
    [
        {
            name: "Spinach, Lima Bean & Crispy Pancetta Pasta",
            img: "../images/anti-inflammatory/meal01.png", alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
            calories: "477", rating: "5.0", ratingCount: "8"
        },
        {
            name: "Italian Wedding Soup",
            img: "../images/anti-inflammatory/meal02.png", alt: "Italian Wedding Soup meal",
            calories: "415", rating: "4.7", ratingCount: "34"
        }
    ],

    // Gluten-free
    [ 
        {
            name: "Creamy White Chili with Cream Cheese",
            img: "../images/gluten-free/meal01.png", alt: "Creamy White Chili with Cream Cheese meal",
            calories: "313", rating: "4.3", ratingCount: "39"
        },
        {
            name: "Chhole (Chickpea Curry)",
            img: "../images/gluten-free/meal02.png", alt: "Chhole (Chickpea Curry) meal",
            calories: "278", rating: "4.7", ratingCount: "73"
        },
        {
            name: "Chipotle Chicken Quinoa Burrito Bowl",
            img: "../images/gluten-free/meal03.png", alt: "Chipotle Chicken Quinoa Burrito Bowl meal",
            calories: "452", rating: "4.7", ratingCount: "46"
        },
        {
            name: "Smoky Collards & Shrimp with Cheesy Grits",
            img: "../images/gluten-free/meal04.png", alt: "Smoky Collards & Shrimp with Cheesy Grits meal",
            calories: "443", rating: "4.2", ratingCount: "12"
        },
        {
            name: "Chicken Hummus Bowls",
            img: "../images/gluten-free/meal05.png", alt: "Chicken Hummus Bowls meal",
            calories: "485", rating: "4.7", ratingCount: "26"
        }
    ],

    // High-fiber
    [
        {
            name: "Easy Pea & Spinach Carbonara",
            img: "../images/high-fiber/meal01.png", alt: "Easy Pea & Spinach Carbonara meal",
            calories: "430", rating: "4.0", ratingCount: "28"
        }
    ],

    // Mediterranean
    [
        {
            name: "Sweet & Spicy Roasted Salmon with Wild Rice Pilaf",
            img: "../images/mediterranean/meal01.png", alt: "Sweet & Spicy Roasted Salmon with Wild Rice Pilaf meal",
            calories: "339", rating: "4.3", ratingCount: "6"
        }
    ],

    // Paleo
    [
        {
            name: "Puttanesca pork chops",
            img: "../images/paleo/meal01.png", alt: "Puttanesca Pork Chops meal",
            calories: "650", rating: "4.6", ratingCount: "3"
        }
    ],

    // Vegan
    [
        {
            name: "White Bean & Veggie Salad",
            img: "../images/vegan/meal01.png", alt: "White Bean & Veggie Salad meal",
            calories: "360", rating: "4.7", ratingCount: "20"
        }
    ],

    // Vegetarian
    [
        {
            name: "Chickpea Pasta with Mushrooms & Kale",
            img: "../images/vegetarian/meal01.png", alt: "Chickpea Pasta with Mushrooms & Kale meal",
            calories: "340", rating: "4.1", ratingCount: "14"
        }
    ],

    // Weight-loss
    [
        {
            name: "Parmesan-Crusted Cauliflower",
            img: "../images/paleo/meal01.png", alt: "Parmesan-Crusted Cauliflower meal",
            calories: "140", rating: "4.3", ratingCount: "3"
        }
    ]
];

let name, img, alt, calories, rating, ratingCount;
let mealCount = 0;

// Assign every meal attributes to every meal element 
for (let diet = 0; diet < diets.length; ++diet) {
    for (let meal = 0; meal < diets[diet].length; ++meal) {
        name = diets[diet][meal].name;
        img = diets[diet][meal].img;
        alt = diets[diet][meal].alt;
        calories = diets[diet][meal].calories;
        rating = diets[diet][meal].rating;
        ratingCount = diets[diet][meal].ratingCount;

        document.querySelector(`.meals .meal:nth-child(${++mealCount})`).innerHTML = `
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
                        <ion-icon class="meal__icon" name="restaurant-outline"></ion-icon>
                        <span>NutriScore &reg; <strong>74</strong></span>
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
