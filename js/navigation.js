// Update style nav links after it reloads
const links = document.querySelectorAll(".nav__link");
const currentPage = location.pathname.split("/").pop();
links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) { link.classList.add("active"); }
    else { link.classList.remove("active"); }
});

// Mobile nav toggle bar
document.querySelector(".button-mobile-nav").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("nav-open");
});
