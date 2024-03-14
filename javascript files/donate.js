"use script";
const menuBtn = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".menu");
const contacBtn = document.querySelector(".contact-btn");
const supportBtn = document.querySelectorAll(".support-btn");
const novelBtn = document.querySelectorAll(".novel-btn");
const novelSection = document.getElementById("novels");
const supportSection = document.getElementById("support");
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

// // Contact scroll
// contacBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   contacSection.scrollIntoView({ behavior: "smooth" });
// });

// // Support button scroll
// supportBtn.forEach((support) => {
//   support.addEventListener("click", (e) => {
//     e.preventDefault();
//     supportSection.scrollIntoView({ behavior: "smooth" });
//   });
// });
