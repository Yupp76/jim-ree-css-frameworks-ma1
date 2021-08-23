const button = document.querySelector("#menubtn");
const menu = document.querySelector(".navbar__menu");

button.addEventListener("click", () => {
  button.classList.toggle("--open");
  menu.classList.toggle("--open");
});
