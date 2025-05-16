/*==================================== HOME ==================================== */
const meals =  {
    0: {
        name: "Puttanesca pork chops", tag: "Paleo",
        img: "../images/paleo/meal01.png", alt: "Puttanesca Pork Chops meal",
        calories: "650", rating: "4.6", ratingCount: "3"
    },
    1: {
        name: "White Bean & Veggie Salad", tag: "Vegan",
        img: "../images/vegan/meal01.png", alt: "White Bean & Veggie Salad meal",
        calories: "360", rating: "4.7", ratingCount: "20"
    },
    2: {
        name: "Chickpea Pasta with Mushrooms & Kale", tag: "Vegetarian",
        img: "../images/vegetarian/meal01.png", alt: "Chickpea Pasta with Mushrooms & Kale meal",
        calories: "340", rating: "4.1", ratingCount: "14"
    },
    3: {
        name: "Sweet & Spicy Roasted Salmon with Wild Rice Pilaf", tag: "Mediterranean",
        img: "../images/mediterranean/meal01.png", alt: "Sweet & Spicy Roasted Salmon with Wild Rice Pilaf meal",
        calories: "339", rating: "4.3", ratingCount: "6"
    },
    4: {
        name: "Spinach, Lima Bean & Crispy Pancetta Pasta", tag: "Anti-inflammatory",
        img: "../images/anti-inflammatory/meal01.png", alt: "Spinach, Lima Bean & Crispy Pancetta Pasta meal",
        calories: "477", rating: "5.0", ratingCount: "8"
    },
    5: {
        name: "Creamy White Chili with Cream Cheese", tag: "Gluten-free",
        img: "../images/gluten-free/meal01.png", alt: "Creamy White Chili with Cream Cheese meal",
        calories: "313", rating: "4.3", ratingCount: "39"
    },
    6: {
        name: "Parmesan-Crusted Cauliflower", tag: "Weight Loss",
        img: "../images/weight-loss/meal01.png", alt: "Parmesan-Crusted Cauliflower meal",
        calories: "313", rating: "4.3", ratingCount: "3"
    }
};

// Load a specific meal based on the day of the week
window.onload = () => {
    const today = new Date().getDay(); // 0 - 6 (Sun - Sat)
    const meal = meals[today];

    document.querySelector(".meal-of-the-day .meal__image").src = meal.img;
    document.querySelector(".meal-of-the-day .meal__image").alt = meal.alt;
    document.querySelector(".meal-of-the-day .meal__tag").textContent = meal.tag;
    document.querySelector(".meal-of-the-day .meal__name").textContent = meal.name;
    document.querySelector(".meal-of-the-day .calorie-count").textContent = meal.calories;
    document.querySelector(".meal-of-the-day .rating").textContent = meal.rating;
    document.querySelector(".meal-of-the-day .rating-count").textContent = meal.ratingCount;
};
