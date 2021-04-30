"use strict";

const headerNavbar = document.querySelector(".header-navbar");
const arrowBot = document.querySelectorAll(".arrow-go-up");
const burgerMenu = document.querySelector(".menu-icon");

// navigation bar
function changeNavBar() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0 && window.innerWidth > 800) {
    headerNavbar.classList.add("transparent");
  } else {
    headerNavbar.classList.remove("transparent");
  }
}
window.addEventListener("scroll", changeNavBar);
document.addEventListener("DOMContentLoaded", changeNavBar);

//arrow at the bottom
function appearArrow() {
  if (window.scrollY > 1300) {
    for (let arrowInBottom of arrowBot) {
      arrowInBottom.classList.add("arrow-go-up-show");
    }
  } else {
    for (let arrowInBottom of arrowBot) {
      arrowInBottom.classList.remove("arrow-go-up-show");
    }
  }
}

function backToTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 10);
  }
}

window.addEventListener("scroll", appearArrow);
for (let arrowInBottom of arrowBot) {
  arrowInBottom.addEventListener("click", backToTop);
}

// burger menu
function openBurgerMenu() {
  setTimeout(() => {
    headerNavbar.classList.toggle("_activ");
    burgerMenu.classList.toggle("_activ");
    document.body.classList.toggle("_lock");
  }, 300);
}

function closeBurgerMenu() {
  if (burgerMenu.classList.contains("_activ")) {
    setTimeout(() => {
      headerNavbar.classList.remove("_activ");
      burgerMenu.classList.remove("_activ");
      document.body.classList.remove("_lock");
    }, 1000);
  }
}

burgerMenu.addEventListener("click", openBurgerMenu);

navLink.forEach((navHeaderItem) => {
  navHeaderItem.addEventListener("click", closeBurgerMenu);
});

//slider
const images = document.querySelectorAll(".slider-line img");
const sliderLine = document.querySelector(".slider-line");

let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
}
window.addEventListener("resize", init);

document.querySelector(".button-slider-next").addEventListener("click", function () {
  rollSlide();
  count++;
});

function rollSlide() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
