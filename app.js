const headerEl = document.querySelector(".header");
const showTextEl = document.querySelector(".show-text");

console.log(headerEl.offsetHeight);
window.addEventListener("scroll", () => {
  if (window.scrollY > showTextEl.offsetTop - headerEl.offsetHeight - 40) {
    headerEl.classList.add("active");
  } else headerEl.classList.remove("active");
});
