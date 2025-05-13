/*=========================================== MEALS ===========================================*/
// Get elements
const buttonLeftArrowEl = document.querySelector(".button-left-arrow");
const buttonRightArrowEl = document.querySelector(".button-right-arrow");

const mealOneImageEl = document.querySelector(".meal__one .meal__image");
const mealTwoImageEl = document.querySelector(".meal__two .meal__image");
const mealThreeImageEl = document.querySelector(".meal__three .meal__image");

const mealOneNameEl = document.querySelector(".meal__one .meal__name");
const mealTwoNameEl = document.querySelector(".meal__two .meal__name");
const mealThreeNameEl = document.querySelector(".meal__three .meal__name");

const mealOneDescriptionEl = document.querySelector(".meal__one .meal__description");
const mealTwoDescriptionEl = document.querySelector(".meal__two .meal__description");
const mealThreeDescriptionEl = document.querySelector(".meal__three .meal__description");

// Initialize
let slideNum = 1;

const slide1 = [
    {
        name: "Puttanesca pork chops",
        photoUrl: "../images/meals/puttanesca-pork-chops.png",
        altText: "Puttanesca pork chops meal.",
        description: "This flavorful pork chop dinner recipe is proof that bold Neapolitan puttanesca sauce can liven up more than..."
    },
    {
        name: "White bean & veggie salad",
        photoUrl: "../images/meals/white-bean-veggie-salad.png",
        altText: "White bean & veggie salad meal.",
        description: "This meatless main-dish salad combines creamy, satisfying white beans and avocado. Try mixing it up with..."
    },
    {
        name: "Chickpea pasta with mushrooms & kale",
        photoUrl: "../images/meals/chickpea-pasta-with-mushrooms-and-kale.png",
        altText: "Chickpea pasta with mushrooms & kale meal.",
        description: "Loading up your pasta with vegetables like the kale and mushrooms here is not only delicious, it also..."
    }
];

const slide2 = [
    {
        name: "Spinach, lima bean & crispy pancetta pasta",
        photoUrl: "../images/meals/spinach-lima-bean-&-crispy-pancetta-pasta.png",
        altText: "Spinach, lima bean & crispy pancetta pasta meal.",
        description: "We opt for fresh spinach pasta here — it cooks quickly and adds a pop of color. Cooking lima beans in..."
    },
    {
        name: "Creamy white chili with cream cheese",
        photoUrl: "../images/meals/creamy-white-chili-with-cream-cheese.png",
        altText: "Creamy white chili with cream cheese meal.",
        description: "This rich yet healthy white chicken chili recipe comes together in a flash thanks to quick-cooking chicken thighs and..."
    },
    {
        name: "Sweet & spicy roasted salmon with wild rice pilaf",
        photoUrl: "../images/meals/sweet-&-spicy-roasted-salmon-with-wild-rice-pilaf.png",
        altText: "Sweet & spicy roasted salmon with wild rice pilaf meal.",
        description: "Fresh jalapeños give this quick and easy roasted salmon dish its kick; honey and balsamic vinegar give it a..."
    }
];

const slide3 = [
    {
        name: "Easy pea & spinach carbonara",
        photoUrl: "../images/meals/easy-pea-&-spinach-carbonara.png",
        altText: "Easy pea & spinach carbonara meal.",
        description: "Fresh pasta cooks up faster than dried, making it a must-have for..."
    },
    {
        name: "Creamy white chili with cream cheese",
        photoUrl: "../images/meals/cheesy-ground-beef-&-cauliflower-casserole.png",
        altText: "Creamy white chili with cream cheese meal.",
        description: "Ground beef and cauliflower combine to create a hearty weeknight casserole that both kids and..."
    },
    {
        name: "",
        photoUrl: "",
        altText: "",
        description: ""
    }
];

const displayArrowsBasedOn = (num) => {
    switch (num) {
        case 1:
            buttonLeftArrowEl.classList.add("hidden");
            buttonRightArrowEl.classList.remove("hidden");
            break;
        case 2:
            buttonLeftArrowEl.classList.remove("hidden");
            buttonRightArrowEl.classList.remove("hidden");
            break;
        case 3:
            buttonRightArrowEl.classList.add("hidden");
            break;
        default: 
            alert("Invalid slide number.");
    }
};

const displaySlidesBasedOn = (num) => {
    switch (num) {
        case 1:
            // Display slide 1
            // Modify images
            mealOneImageEl.src = slide1[0].photoUrl;
            mealTwoImageEl.src = slide1[1].photoUrl;
            mealThreeImageEl.src = slide1[2].photoUrl;

            // Modify alternative texts for images
            mealOneImageEl.alt = slide1[0].altText;
            mealTwoImageEl.alt = slide1[1].altText;
            mealThreeImageEl.alt = slide1[2].altText;

            // Modify names
            mealOneNameEl.innerHTML = slide1[0].name;
            mealTwoNameEl.innerHTML = slide1[1].name;
            mealThreeNameEl.innerHTML = slide1[2].name;

            // Modify descriptions
            mealOneDescriptionEl.innerHTML = slide1[0].description;
            mealTwoDescriptionEl.innerHTML = slide1[1].description;
            mealThreeDescriptionEl.innerHTML = slide1[2].description;

            break;
        case 2:
            // Display slide 2
            // Modify images
            mealOneImageEl.src = slide2[0].photoUrl;
            mealTwoImageEl.src = slide2[1].photoUrl;
            mealThreeImageEl.src = slide2[2].photoUrl;

            // Modify alternative texts for images
            mealOneImageEl.alt = slide2[0].altText;
            mealTwoImageEl.alt = slide2[1].altText;
            mealThreeImageEl.alt = slide2[2].altText;

            // Modify names
            mealOneNameEl.innerHTML = slide2[0].name;
            mealTwoNameEl.innerHTML = slide2[1].name;
            mealThreeNameEl.innerHTML = slide2[2].name;

            // Modify descriptions
            mealOneDescriptionEl.innerHTML = slide2[0].description;
            mealTwoDescriptionEl.innerHTML = slide2[1].description;
            mealThreeDescriptionEl.innerHTML = slide2[2].description;

            break;
        case 3:
            // Display slide 3
            // Modify images
            mealOneImageEl.src = slide3[0].photoUrl;
            mealTwoImageEl.src = slide3[1].photoUrl;
            mealThreeImageEl.src = slide3[2].photoUrl;

            // Modify alternative texts for images
            mealOneImageEl.alt = slide3[0].altText;
            mealTwoImageEl.alt = slide3[1].altText;
            mealThreeImageEl.alt = slide3[2].altText;

            // Modify names
            mealOneNameEl.innerHTML = slide3[0].name;
            mealTwoNameEl.innerHTML = slide3[1].name;
            mealThreeNameEl.innerHTML = slide3[2].name;

            // Modify descriptions
            mealOneDescriptionEl.innerHTML = slide3[0].description;
            mealTwoDescriptionEl.innerHTML = slide3[1].description;
            mealThreeDescriptionEl.innerHTML = slide3[2].description;

            break;
        default: 
            alert("Invalid slide number.");
    }
};

let currentIndex = 0;

// Left arrow button clicked
buttonLeftArrowEl.addEventListener("click", () => {
    --slideNum;
    displayArrowsBasedOn(slideNum);
    displaySlidesBasedOn(slideNum);
});

// Right arrow button clicked
buttonRightArrowEl.addEventListener("click", () => {
    ++slideNum;
    displayArrowsBasedOn(slideNum);
    displaySlidesBasedOn(slideNum);
});


/*=========================================== PRICING ===========================================*/
// Get elements
const monthlyButton = document.querySelector(".tabs__monthly");
const annualButton = document.querySelector(".tabs__annual");
const starterPlanPrice = document.querySelector(".pricing__plan-starter .plan-price");
const starterPlanText = document.querySelector(".pricing__plan-starter .plan-text");
const completePlanPrice = document.querySelector(".pricing__plan-complete .plan-price");
const completePlanText = document.querySelector(".pricing__plan-complete .plan-text");

// Monthly tab clicked
monthlyButton.addEventListener("click", () => {
    // Update css
    monthlyButton.style.backgroundColor = "var(--primary-color)"; /* temp */
    monthlyButton.style.color = "#fff"; /* temp */
    monthlyButton.style.fontWeight = 600;
    annualButton.style.fontWeight = 400;
    annualButton.style.backgroundColor = "#fff"; /* temp */
    annualButton.style.color = "var(--primary-color)"; /* temp */

    // Update cards
    starterPlanPrice.innerHTML = `<span>$</span> 399`;
    starterPlanText.innerHTML = "per month. That's just $13 per meal!";
    completePlanPrice.innerHTML = `<span>$</span> 649`;
    completePlanText.innerHTML = "per month. That's just $13 per meal!";
});

// Annual tab clicked
annualButton.addEventListener("click", () => {
    // Update css
    monthlyButton.style.backgroundColor = "#fff"; /* temp */
    monthlyButton.style.color = "var(--primary-color)"; /* temp */
    monthlyButton.style.fontWeight = 400;
    annualButton.style.fontWeight = 600;
    annualButton.style.backgroundColor = "var(--primary-color)"; /* temp */
    annualButton.style.color = "#fff"; /* temp */

    // Update cards
    starterPlanPrice.innerHTML = `<span>$</span> 4788`;
    starterPlanText.innerHTML = "per year. That's just $11 per meal!";
    completePlanPrice.innerHTML = `<span>$</span> 7788`;
    completePlanText.innerHTML = "per year. That's just $13 per meal!";
});
