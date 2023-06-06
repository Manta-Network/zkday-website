let eventsSwiper = new Swiper(".events-swiper", {
    speed: 500,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: true
    },
    allowTouchMove: false
});

let heroSwiper = new Swiper(".hero-swiper", {
    speed: 500,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: true
    },
    allowTouchMove: false
});

let sponsorsSwiper = new Swiper(".sponsors-swiper", {
    loop: true,
    freeMode: true,
    slidesPerView: 8,
    a11y: false,
    preventInteractionOnTransition: true,
    speed: 4000,
    autoplay: {
        delay: 1
    },
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        575: {
            slidesPerView: 3
        },
        767: {
            slidesPerView: 4
        },
        1199: {
            slidesPerView: 6,
        },
        1440: {
            slidesPerView: 8,
        },
    }
});

let scrollPos = window.scrollY;
const navbar = document.querySelector('nav.navbar');

const addClassOnScroll = () => navbar.classList.add('active');
const removeClassOnScroll = () => navbar.classList.remove('active');

window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;

    scrollPos > 50
        ? addClassOnScroll()
        : removeClassOnScroll()
})

const body = document.querySelector('body');
let navbarToggler = document.querySelector('.navbar-toggler');

const addClassOnToggle = () => {
    navbar.classList.add('collapsed');
    body.classList.add('hidden');
}
const removeClassOnToggle = () => {
    navbar.classList.remove('collapsed');
    body.classList.remove('hidden');
}

navbarToggler.addEventListener('click', () => {
    navbar.classList.contains('collapsed')
        ? removeClassOnToggle()
        : addClassOnToggle()
})

let viewAllSpeakersBtn = document.querySelector('#view-all-speakers-btn');
let speakersHiddenItemsWrap = document.querySelector('.speakers-section .display-none');

viewAllSpeakersBtn.addEventListener('click', () => {
    viewAllSpeakersBtn.classList.add('display-none')
    speakersHiddenItemsWrap.classList.remove('display-none');
})
