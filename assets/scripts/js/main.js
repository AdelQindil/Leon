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

