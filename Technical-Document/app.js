const button = document.querySelector(".nav-button");
const navBar = document.querySelector("#navbar");

button.addEventListener("click", toggleNav);

function toggleNav() {
  navBar.classList.toggle("open-nav");
}