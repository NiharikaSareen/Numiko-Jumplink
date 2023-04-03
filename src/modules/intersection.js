/*
The module uses Intersection Observer API to monitor the intersections of jumplink sections and subsequently modify the section title displayed on the navigation.
*/

const sections = document.querySelectorAll('[data-item]');
const sectionName = document.querySelector('[data-title]');
const nav = document.querySelector('[data-nav]');
console.log(`${document.querySelector('nav').offsetHeight}px`);
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-100px 0px -100px 0px'
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionName.innerHTML = `Section ${entry.target.getAttribute(
                  'data-item'
                )}`;
        entry.target.style.background = entry.target.getAttribute("data-color");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});