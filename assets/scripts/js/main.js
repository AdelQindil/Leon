// --Back to top
// Selectors
const rootE = document.documentElement;
const toTopBtn = document.getElementById("toTopBtn");

// Function
const scrollToTop = () => {
    rootE.scrollTo({
        top: 0,
    })
}

// Event Listener
toTopBtn.addEventListener("click", scrollToTop);

// --Hide Back to top
window.addEventListener("scroll", e => {
    toTopBtn.style.display = window.scrollY > 10 ? 'block' : 'none'; //Hide the btn
    toTopBtn.style.opacity = window.scrollY > 400 ? '1' : '0'; //Fade the btn in and out
})