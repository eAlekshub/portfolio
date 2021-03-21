"use strict";

const headerNavbar = document.querySelector(".header-navbar");
function checkScroll() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 0) { 
        setTimeout(() => {
            headerNavbar.classList.add("transparent");
        }, 200)
               
    }
    else {
        setTimeout(() => {
            headerNavbar.classList.remove("transparent");
        }, 200)    
    }
};
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);


const navLink = document.querySelectorAll(".nav-link");
for (let navHeaderItem of navLink) {
    window.addEventListener("scroll", function () {
        let scrollPos = window.scrollY;
        if (scrollPos > 0) {
            navHeaderItem.classList.add("scrolled");
        }
        else {
             navHeaderItem.classList.remove("scrolled");
        }
    })
}

const arrowBot = document.querySelectorAll(".arrow-go-up");
for (let arrowInBottom of arrowBot) {
    window.addEventListener("scroll", function () {
    if (window.scrollY > 1300) {
        arrowInBottom.classList.add("arrow-go-up-show");
    }
    else {
        arrowInBottom.classList.remove("arrow-go-up-show");
    }
    });
    
    arrowInBottom.addEventListener("click", function backToTop () {
        if (window.scrollY > 0) {
            window.scrollBy(0, -80); 
            setTimeout(backToTop, 10);
        }
    })
}









