const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".navbar-mobile");


burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});