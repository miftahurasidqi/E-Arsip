// Hamburher
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
});

// addSurat
const button = document.querySelector("#addArsip");
const list = document.querySelector("#addSuratList");

button.addEventListener("click", function () {
  list.classList.toggle("hidden");
});
