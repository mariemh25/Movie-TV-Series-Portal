document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("back-to-top");

    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
