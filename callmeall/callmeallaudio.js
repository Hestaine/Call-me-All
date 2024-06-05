"use strict";
// DOM elements
const pageInput = document.querySelector("#page-num-input");
const pageSubmit = document.querySelector(".page-num-submit");
const pageNums = document.querySelectorAll(".page-num");
const errorMsg = document.querySelector(".navigate-error");

const menuBtn = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".menu");

// Menu open
const openMenu = function () {
  nav.classList.remove("hidden");
  nav.classList.add("slidein");
  nav.classList.remove("slideout");

  menuClose.classList.remove("close-navBtn");

  menuBtn.classList.add("hidden");
};

// Menu close
const closeMenu = function () {
  nav.classList.add("hidden");
  menuBtn.classList.remove("hidden");

  nav.classList.add("slideout");
  nav.classList.remove("slidein");

  menuClose.classList.add("close-navBtn");
};

// Event listeners
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

pageNums.forEach((pageNum) => {
  pageNum.addEventListener("click", function (e) {
    document.querySelector("#navigator").scrollIntoView({ behavior: "smooth" });
  });
});

pageSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  // get numbet input from form
  const inputedNum = pageInput.value;

  // Setting conditions
  if (inputedNum && isFinite(inputedNum)) {
    console.log(pageSubmit);
    const desiredPage = document.querySelector(`#chapter-${inputedNum}`);
    desiredPage.scrollIntoView({ behavior: "smooth" });
  } else {
    errorMsg.textContent = `${inputedNum} is not a number, were you just testing it?`;
  }
});
