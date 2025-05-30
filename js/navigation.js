// Old solution (there was a bug when deployed in netlify)
// const links = document.querySelectorAll(".nav__link");
// const currentPage = window.location.pathname.split("/").pop();
// links.forEach((link) => {
    //     if (link.getAttribute("href") === currentPage) { link.classList.add("active"); }
    //     else { link.classList.remove("active"); }
    // });
    
    
// Update style nav links after it reloads
// New solution (worst bug than the first one)
// const links = document.querySelectorAll(".nav__link");
// const currentPage = window.location.pathname;
// // console.log(currentPage);
// links.forEach((link) => {
//     // console.log(link.href, currentPage);
//     if (link.href.includes(currentPage)) { link.classList.add("active"); }
//     else { link.classList.remove("active"); }
// });

// Mobile nav toggle bar
document.querySelector(".button-mobile-nav").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("nav-open");
});

// STICKY NAVIGATION
// const sectionHeroEl = document.querySelector(".hero");

// const obs = new IntersectionObserver(
//     function (entries) {
//         const ent = entries[0];
//         console.log(ent);

//         if (ent.isIntersecting === false) {
//         document.body.classList.add("sticky");
//         }

//         if (ent.isIntersecting === true) {
//         document.body.classList.remove("sticky");
//         }
//     },
//     {
//         // Observe in the viewport
//         root: null,
//         threshold: 0,
//         rootMargin: "-80px"
//     }
// )

// obs.observe(sectionHeroEl);