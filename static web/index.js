const sections = document.querySelectorAll(".section");

// Debounce to limit scroll firing frequency
let isScrolling = false;

// Function to scroll to the next or previous section
function scrollToSection(index) {
    isScrolling = true;
    setTimeout(() => (isScrolling = false), 500);
    sections[index].scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    sections.forEach((section, index) => {
        section.addEventListener("wheel", (event) => {
            if (isScrolling) return; // Only scroll if not already scrolling
            if (event.deltaY > 0 && index < sections.length - 1) {
                scrollToSection(index + 1); // Scroll down to the next section
            } else if (event.deltaY < 0 && index > 0) {
                scrollToSection(index - 1); // Scroll up to the previous section
            }
        });
    });
});
