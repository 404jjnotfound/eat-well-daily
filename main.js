/*=========================================== MEALS ===========================================*/
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});


/*=========================================== PRICING ===========================================*/
// Get elements
// const monthlyButton = document.querySelector(".tabs__monthly");
// const annualButton = document.querySelector(".tabs__annual");
// const starterPlanPrice = document.querySelector(".pricing__plan-starter .plan-price");
// const starterPlanText = document.querySelector(".pricing__plan-starter .plan-text");
// const completePlanPrice = document.querySelector(".pricing__plan-complete .plan-price");
// const completePlanText = document.querySelector(".pricing__plan-complete .plan-text");

// // Monthly tab clicked
// monthlyButton.addEventListener("click", () => {
//     // Update css
//     monthlyButton.style.backgroundColor = "var(--primary-color)"; /* temp */
//     monthlyButton.style.color = "#fff"; /* temp */
//     monthlyButton.style.fontWeight = 600;
//     annualButton.style.fontWeight = 400;
//     annualButton.style.backgroundColor = "#fff"; /* temp */
//     annualButton.style.color = "var(--primary-color)"; /* temp */

//     // Update cards
//     starterPlanPrice.innerHTML = `<span>$</span> 399`;
//     starterPlanText.innerHTML = "per month. That's just $13 per meal!";
//     completePlanPrice.innerHTML = `<span>$</span> 649`;
//     completePlanText.innerHTML = "per month. That's just $11 per meal!";
// });

// // Annual tab clicked
// annualButton.addEventListener("click", () => {
//     // Update css
//     monthlyButton.style.backgroundColor = "#fff"; /* temp */
//     monthlyButton.style.color = "var(--primary-color)"; /* temp */
//     monthlyButton.style.fontWeight = 400;
//     annualButton.style.fontWeight = 600;
//     annualButton.style.backgroundColor = "var(--primary-color)"; /* temp */
//     annualButton.style.color = "#fff"; /* temp */

//     // Update cards
//     starterPlanPrice.innerHTML = `<span>$</span> 4788`;
//     starterPlanText.innerHTML = "per year. That's just $13 per meal!";
//     completePlanPrice.innerHTML = `<span>$</span> 7788`;
//     completePlanText.innerHTML = "per year. That's just $11 per meal!";
// });
