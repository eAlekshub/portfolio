"use strict";

const contactsFooter = document.querySelector(".contacts");
function trackScroll() {
    if (window.scrollY > 0) { 
            contactsFooter.classList.add("scrolled");      
    }
    else {
            contactsFooter.classList.remove("scrolled");  
    }
};
window.addEventListener("scroll", trackScroll);
document.addEventListener("DOMContentLoaded", trackScroll);


// слайдер отзывов клиентов
let slideIndex = 1;
showSlides(slideIndex);
function showSlides(number) {
    let slides = document.querySelectorAll(".client")
    if (number > slides.length) {
        slideIndex = 1;
    }
    if (number < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let previous = document.querySelector(".previous")
previous.onclick = () => {
showSlides(slideIndex = slideIndex - 1);
}

let next = document.querySelector(".next");
next.onclick = () => {
    showSlides(slideIndex = slideIndex + 1);
}

// стрелка вверх
let arrowUp = document.querySelector(".arrow-up");
function checkScroll() {
    if (window.scrollY > 1000) {
        arrowUp.classList.add("arrow-up-show");
    }
    else {
       arrowUp.classList.remove("arrow-up-show"); 
    }
};

function scrollUp() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -100);
        setTimeout(scrollUp, 10);
    }
};

window.addEventListener("scroll", checkScroll);
arrowUp.addEventListener("click", scrollUp);


