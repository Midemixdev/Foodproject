console.log("Hello world!");

const you = "midemixdev";
const h1 = document.querySelector(".heading-primary");

console.log(you);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = you;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "2rem";
//   h1.style.borderRadius = "1rem";
// });

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
