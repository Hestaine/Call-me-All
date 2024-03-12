"use script";
const menuBtn = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".menu");
const contacBtn = document.querySelector(".contact-btn");
const contacSection = document.getElementById("contact");

// Web functions
// Menu open
const openMenu = function () {
  nav.classList.remove("hidden");
  menuBtn.classList.add("hidden");
};

// Menu close
const closeMenu = function () {
  nav.classList.add("hidden");
  menuBtn.classList.remove("hidden");
};

// Event listeners
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
contacBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contacSection.scrollIntoView({ behavior: "smooth" });
});
