const wrapper = document.querySelector(".wrapper");
const navbar = document.querySelector(".navbar");

wrapper.addEventListener("scroll", function () {
  if (wrapper.scrollTop > 180) {
    navbar.classList.add("unique-color-dark")
  } else {
    navbar.classList.remove("unique-color-dark")
  }
})