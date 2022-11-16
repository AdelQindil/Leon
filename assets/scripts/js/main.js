// --Back to top button
let backToTopBtn = document.getElementById("toTopBtn");

// *Show button on scroll away from top
document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.add("btn-show");
    } else {
        backToTopBtn.classList.remove("btn-show");
    }
});

// *scroll to the top of the document upon click
const toTop = () => {
    document.documentElement.scrollIntoView();
};

// --Open navigation menu
const navIcon = document.getElementById("toggle-menu");
const menuBox = document.querySelector("header nav ul");
const spanMenu = document.querySelector(".menu-links span:nth-child(2")

// *Toggle menu & middle line animation on click
const toggleMenu = () => {
    if (menuBox.style.opacity == "1") {
        menuBox.style.opacity = "0", menuBox.style.visibility = "hidden", spanMenu.style.width = "66%"
    } else {
        menuBox.style.opacity = "1", menuBox.style.visibility = "visible", spanMenu.style.width = "100%"
   }
};
// Add event for the menu icon
navIcon.addEventListener("click", toggleMenu);

//* Close menu when clicks away
document.addEventListener('click', (e) => {
    if (!navIcon.contains(e.target)) {
        menuBox.style.opacity = "0", menuBox.style.visibility = "hidden", spanMenu.style.width = "66%"
    };
});