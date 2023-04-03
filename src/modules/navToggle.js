/*
The module is used to show and hide the navbar.
It also chnage the text on the button
*/

const navButton = document.querySelector('[data-target="nav-btn"]');
const navContent = document.querySelector('[data-target="nav-content"]');
const navLinks = document.querySelectorAll('.navbar-list__item')

navLinks.forEach((link) => {
  link.addEventListener('click', toggle)
})

navButton.addEventListener("click", toggle);


function toggle() {
  const initialText = 'Show';
  if (navButton.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    navButton.textContent = 'Hide';
  } else {
    navButton.textContent = initialText;
  }
  navContent.classList.toggle('slide');
}