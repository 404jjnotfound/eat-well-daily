/*==================================== HOME ==================================== */
const meals =  [
    [
        {
            name: "Chickpea Pasta with Mushrooms & Kale", tag: "Vegetarian", cookingTime: 30,
            img: "../images/vegetarian/meal01.png", alt: "Chickpea Pasta with Mushrooms & Kale meal",
            calories: "340", rating: "4.1", ratingCount: "14"
        },
        {
            name: "Hearty Chickpea & Spinach Stew", tag: "Anti-Inflammatory", cookingTime: 30,
            img: "../images/anti-inflammatory/meal04.png", alt: "Hearty Chickpea & Spinach Stew meal",
            calories: "401", rating: "4.8", ratingCount: "48"
        },
        {
            name: "Chhole (Chickpea Curry)", tag: "Gluten-Free", cookingTime: 20,
            img: "../images/gluten-free/meal02.png", alt: "Chhole (Chickpea Curry) meal",
            calories: "278", rating: "4.7", ratingCount: "73"
        }
    ],
    [
        {
            name: "Spinach, Lima Bean & Crispy Pancetta Pasta", tag: "Anti-Inflammatory", cookingTime: 20,
            img: "../images/anti-inflammatory/meal01.png", alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
            calories: "477", rating: "5.0", ratingCount: "8"
        },
        {
            name: "White Bean & Veggie Salad", tag: "Vegan", cookingTime: 10,
            img: "../images/vegan/meal01.png", alt: "White Bean & Veggie Salad meal",
            calories: "360", rating: "4.7", ratingCount: "20"
        },
        {
            name: "Chickpea Pasta with Mushrooms & Kale", tag: "Vegetarian", cookingTime: 30,
            img: "../images/vegetarian/meal01.png", alt: "Chickpea Pasta with Mushrooms & Kale meal",
            calories: "340", rating: "4.1", ratingCount: "14"
        }
    ],
    [
        {
            name: "Chhole (Chickpea Curry)", tag: "Gluten-Free", cookingTime: 20,
            img: "../images/gluten-free/meal02.png", alt: "Chhole (Chickpea Curry) meal",
            calories: "278", rating: "4.7", ratingCount: "73"
        },
        {
            name: "Chickpea Pasta with Mushrooms & Kale", tag: "Vegetarian", cookingTime: 30,
            img: "../images/vegetarian/meal01.png", alt: "Chickpea Pasta with Mushrooms & Kale meal",
            calories: "340", rating: "4.1", ratingCount: "14"
        },
        {
            name: "Spinach, Lima Bean & Crispy Pancetta Pasta", tag: "Anti-Inflammatory", cookingTime: 20,
            img: "../images/anti-inflammatory/meal01.png", alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
            calories: "477", rating: "5.0", ratingCount: "8"
        }
    ],
    [
        {
            name: "Red Lentil Soup with Saffron", tag: "Vegetarian", cookingTime: 40,
            img: "../images/vegetarian/meal02.png", alt: "Red Lentil Soup with Saffron meal",
            calories: "280", rating: "4.6", ratingCount: "21"
        },
        {
            name: "Chhole (Chickpea Curry)", tag: "Gluten-Free", cookingTime: 20,
            img: "../images/gluten-free/meal02.png", alt: "Chhole (Chickpea Curry) meal",
            calories: "278", rating: "4.7", ratingCount: "73"
        },
        {
            name: "White Bean & Veggie Salad", tag: "Vegan", cookingTime: 10,
            img: "../images/vegan/meal01.png", alt: "White Bean & Veggie Salad meal",
            calories: "360", rating: "4.7", ratingCount: "20"
        }
    ],
    [
        {
            name: "Chhole (Chickpea Curry)", tag: "Gluten-Free", cookingTime: 20,
            img: "../images/gluten-free/meal02.png", alt: "Chhole (Chickpea Curry) meal",
            calories: "278", rating: "4.7", ratingCount: "73"
        },
        {
            name: "Spinach, Lima Bean & Crispy Pancetta Pasta", tag: "Anti-Inflammatory", cookingTime: 20,
            img: "../images/anti-inflammatory/meal01.png", alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
            calories: "477", rating: "5.0", ratingCount: "8"
        },
        {
            name: "Chickpea Pasta with Mushrooms & Kale", tag: "Vegetarian", cookingTime: 30,
            img: "../images/vegetarian/meal01.png", alt: "Chickpea Pasta with Mushrooms & Kale meal",
            calories: "340", rating: "4.1", ratingCount: "14"
        }
    ],
    [
        {
            name: "Red Lentil Soup with Saffron", tag: "Vegetarian", cookingTime: 40,
            img: "../images/vegetarian/meal02.png", alt: "Red Lentil Soup with Saffron meal",
            calories: "280", rating: "4.6", ratingCount: "21"
        },
        {
            name: "Creamy White Chili with Cream Cheese", tag: "Gluten-Free", cookingTime: 30,
            img: "../images/gluten-free/meal01.png", alt: "Creamy White Chili with Cream Cheese meal",
            calories: "313", rating: "4.3", ratingCount: "39"
        },
        {
            name: "Spinach, Lima Bean & Crispy Pancetta Pasta", tag: "Anti-Inflammatory", cookingTime: 20,
            img: "../images/anti-inflammatory/meal01.png", alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
            calories: "477", rating: "5.0", ratingCount: "8"
        }
    ],
    [
        {
            name: "Spinach, Lima Bean & Crispy Pancetta Pasta", tag: "Anti-Inflammatory", cookingTime: 20,
            img: "../images/anti-inflammatory/meal01.png", alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
            calories: "477", rating: "5.0", ratingCount: "8"
        },
        {
            name: "Red Lentil Soup with Saffron", tag: "Vegetarian", cookingTime: 40,
            img: "../images/vegetarian/meal02.png", alt: "Red Lentil Soup with Saffron meal",
            calories: "280", rating: "4.6", ratingCount: "21"
        },
        {
            name: "Creamy White Chili with Cream Cheese", tag: "Gluten-Free", cookingTime: 30,
            img: "../images/gluten-free/meal01.png", alt: "Creamy White Chili with Cream Cheese meal",
            calories: "313", rating: "4.3", ratingCount: "39"
        }
    ]
];

// Load a specific meal based on the day of the week
window.onload = () => {
    const today = new Date().getDay(); // 0 - 6 (Sun - Sat)
    let mealCardCount = 0;

    meals[today].forEach((meal) => {
        ++mealCardCount;

        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .meal__image`).src = meal.img;
        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .meal__image`).alt = meal.alt;
        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .meal__tag`).textContent = meal.tag;
        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .meal__name`).textContent = meal.name;
        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .calorie-count`).textContent = meal.calories;
        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .meal__time`).innerHTML = `<span><strong>${meal.cookingTime}</strong> minutes (cooking time)</span>`;
        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .rating`).textContent = meal.rating;
        document.querySelector(`.meal-of-the-day .meal:nth-child(${mealCardCount}) .rating-count`).textContent = meal.ratingCount;

        if (mealCardCount > 3) { mealCardCount = 0; } // reset
    });
};
