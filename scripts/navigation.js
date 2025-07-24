// This code defines a custom HTML element for the primary header
class PrimaryHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="header__container">
        <div>
          <img src="images/logo.png" alt="EatWell Logo" class="logo" />
        </div>

        <nav class="nav">
          <ul class="nav__list">
            <li>
              <a href="index.html" class="nav__link link-home">Home</a>
            </li>
            <li><a href="meals.html" class="nav__link link-meals">Meals</a></li>
            <li>
              <a href="contact.html" class="nav__link link-contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button class="button-mobile-nav">
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </div>
    `;
  }
}
customElements.define("primary-header", PrimaryHeader);

// Mobile nav toggle bar
document.querySelector(".button-mobile-nav").addEventListener("click", () => {
  document.querySelector("primary-header").classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");
});

// Highlight active navigation link
// This code checks the current URL and add the 'active' class to the corresponding navigation link
const links = document
  .querySelectorAll("primary-header .nav__link")
  .forEach((link) => {
    if (
      link.href === window.location.href ||
      link.href === window.location.origin + window.location.pathname
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

// Update style nav links after it reloads
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

// Update style nav links after it reloads
// Solution 3 (Warning: This is not a flexible solution )
// const links = document.querySelectorAll(".nav__link");
// const homeLinkEl = document.querySelector(".link-home");
// const mealsLinkEl = document.querySelector(".link-meals");
// const contactLinkEl = document.querySelector(".link-contact");

// const currentPath = window.location.pathname;

// // If its in contact page
// if (currentPath.includes("/contact")) {
//   homeLinkEl.classList.remove("active");
//   mealsLinkEl.classList.remove("active");
//   contactLinkEl.classList.add("active");
// }
// // If its in meals page
// else if (currentPath.includes("/meals")) {
//   homeLinkEl.classList.remove("active");
//   mealsLinkEl.classList.add("active");
//   contactLinkEl.classList.remove("active");
// }
// // If its in home page
// else if (currentPath.includes("/")) {
//   homeLinkEl.classList.add("active");
//   mealsLinkEl.classList.remove("active");
//   contactLinkEl.classList.remove("active");
// }
