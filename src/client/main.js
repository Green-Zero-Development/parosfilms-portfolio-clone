import "vite/dynamic-import-polyfill";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import SmoothScroll from 'smooth-scroll';
import Swiper, { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';
import "./css/global.css";
import "./css/header.css";
import "./css/home.css";
import "./css/inner-pages.css";

Swiper.use([Pagination, Navigation, EffectFade, Autoplay]);

var scroll = new SmoothScroll('a[href*="#"]');

const bodyTag = document.body;
let header = document.querySelector('.scroll-menu');
let computedStyle = getComputedStyle(header);
let headerBoxHeight = computedStyle.height
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuOpen = document.getElementById("mobile-menu-open");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const siteCopyright = document.getElementById('copyright-date');
const megaMenu = document.getElementById('mega-menu');
const megaTrig = document.getElementById('mega-trig');
const megaTrigOff = document.getElementById('mega-trig-off');

mobileMenuOpen.addEventListener('click', e => {
  disableBodyScroll(mobileMenu);
});

mobileMenuClose.addEventListener('click', e => {
  enableBodyScroll(mobileMenu);
});

megaTrig.addEventListener('click', e => {
  disableBodyScroll(megaMenu);
  bodyTag.style.marginRight = "12px"
});

megaTrigOff.addEventListener('click', e => {
  enableBodyScroll(megaMenu);
  bodyTag.style.marginRight = "0px"
});

function init() {
  // A demo: add an element to the document, then announce it
  const alertNode = document.createElement("div");
  const mainNode = document.querySelector("main");

  alertNode.setAttribute("role", "status");
  alertNode.setAttribute("aria-live", "polite");
  mainNode.appendChild(alertNode);

  // Wait some arbitrary time, then populate it
  setTimeout(() => {
    const successNode = document.createElement("p");
    // Let's verify that Vite is injecting environment variables
    // @see https://vitejs.dev/guide/env-and-mode.html#env-variables
    if (import.meta.env.DEV === true) {
      successNode.innerText = "Vite is serving the script correctly!";
    }
    if (import.meta.env.PROD === true) {
      successNode.innerText =
        "";
    }
    alertNode.appendChild(successNode);
  }, 400);
}

init();

let doc = document.documentElement;
let w = window;

let prevScroll = w.scrollY || doc.scrollTop;
let curScroll;
let direction = 0;
let prevDirection = 0;

var checkScroll = function() {
  if (curScroll < 270) {
    header.classList.add('header-scroll-translate');
  }
  /*
  ** Find the direction of scroll
  ** 0 - initial, 1 - up, 2 - down
  */
  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) { 
    //scrolled up
    direction = 2;
  }
  else if (curScroll < prevScroll) { 
    //scrolled down
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
};

var toggleHeader = function(direction, curScroll) {
  
  if (direction === 2 && curScroll > 150) { 

    //replace 52 with the height of your header in px

    header.classList.add('header-scroll-translate');
    prevDirection = direction;
  }
  else if (direction === 1) {
    header.classList.remove('header-scroll-translate');
    prevDirection = direction;
  }
};

window.addEventListener('scroll', checkScroll);

// window.addEventListener('load', (event) => {
//   header.classList.add('header-scroll-translate');
// });

// let weddingStillGallery = new SimpleLightbox('.wedding-stills a', { animationSpeed: 0, animationSlide: false, throttleInterval: 8 });

const mainSwiper = document.getElementById('main-swiper');
const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".swiper-slide-wedding");
const slideCount = slides.length;
fraction.textContent = `1 / ${slideCount}`;

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  effect: 'fade',
  speed: 1500,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  on: {
    slideChange: () => {
      fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
    }
  },
});

mainSwiper.querySelector('.swiper-pagination').classList.remove('swiper-pagination-horizontal');
mainSwiper.querySelector('.swiper-pagination').classList.add('swiper-pagination-vertical');

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  speed: 1500,
  breakpoints: {
    768: {
      
    },
    1200: {
      
    },
    1691: {
      
    },
  },
});