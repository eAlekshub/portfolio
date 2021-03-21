"use strict";
//arrow up
const arrowUp = document.querySelector(".arrow-up");
function addArrowup() {
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

window.addEventListener("scroll", addArrowup);
arrowUp.addEventListener("click", scrollUp);


//header slider
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 10000);
let currentSlide = 0;
function goToSlide(n){
  slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

function nextSlide(){
  goToSlide(currentSlide+1);
}
function previousSlide(){
  goToSlide(currentSlide-1);
}

let next = document.querySelector(".next");
next.onclick = () => {
    nextSlide();
}
let previous = document.querySelector(".previous")
previous.onclick = () => {
    previousSlide();
}

// animation on scroll
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll);
    function animScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('activ');
            }
            else {
                if (!animItem.classList.contains('anim-no-hide')) {
                animItem.classList.remove('activ');
                }
               
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    // setTimeout(() => { animScroll(); }, 300);

}

// change navigation bar
const header = document.querySelector(".row");
const triangle = document.querySelector(".logo-triangle");
const logo = document.querySelector(".logo");
const line = document.querySelector(".line");

function changeNavBar() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 0) { 
        setTimeout(() => {
            header.classList.add("new-nav");
            triangle.classList.add("add-triangle");
            logo.classList.add("new-logo");
            line.classList.add("new-line");
        }, 200)
               
    }
    else {
        setTimeout(() => {
            header.classList.remove("new-nav");
            triangle.classList.remove("add-triangle");
            logo.classList.remove("new-logo");
            line.classList.remove("new-line");
        }, 200)    
    }
};
window.addEventListener("scroll", changeNavBar);

