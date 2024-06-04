"use strict";
// DOM elements
const pageInput = document.querySelector("#page-num-input");
const pageSubmit = document.querySelector(".page-num-submit");
const pageNums = document.querySelectorAll(".page-num");
const errorMsg = document.querySelector(".navigate-error");

const nav = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

const overlay = document.querySelector(".overlay");
const navigateOpenBtn = document.querySelector(".open-nav");
const navigateSection = document.querySelector("#navigator");

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

const navigateToggle = function () {
  overlay.classList.toggle("hidden");
  navigateSection.classList.toggle("hidden");
};

// Event listeners
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

pageSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  // get numbet input from form
  const inputedNum = pageInput.value;

  // Setting conditions
  if (inputedNum && isFinite(inputedNum)) {
    const desiredPage = document.querySelector(`#chapter-${inputedNum}`);
    desiredPage.scrollIntoView({ behavior: "smooth" });

    navigateToggle();
  } else {
    errorMsg.textContent = `${inputedNum} is not a number, were you just testing it?`;
  }
});

navigateOpenBtn.addEventListener("click", navigateToggle);
