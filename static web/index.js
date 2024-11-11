const sections = document.querySelectorAll(".section");
const indicators = document.querySelectorAll(".indicator");

// Debounce to limit scroll firing frequency
let isScrolling = false;

function updateIndicator(activeIndex) {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === activeIndex);
    });
}

// Function to scroll to the next or previous section
function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    updateIndicator(index);
}

document.addEventListener("DOMContentLoaded", () => {
    sections.forEach((section, index) => {
        section.addEventListener("wheel", (event) => {
            if (isScrolling) return; // Only scroll if not already scrolling

            isScrolling = true;
            setTimeout(() => (isScrolling = false), 500); // Reset after 500ms

            if (event.deltaY > 0 && index < sections.length - 1) {
                scrollToSection(index + 1); // Scroll down to the next section
            } else if (event.deltaY < 0 && index > 0) {
                scrollToSection(index - 1); // Scroll up to the previous section
            }
        });
    });
});
