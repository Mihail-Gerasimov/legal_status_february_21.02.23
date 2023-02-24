const burgerBtn = document.querySelector('.burger'),
    mobileMenu = document.querySelector('.nav__menu'),
    listItem = document.querySelector('.list-element');

burgerBtn.onclick = function () {
    mobileMenu.classList.toggle('nav__menu--active');
    burgerBtn.classList.toggle('change');
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        mobileMenu.classList.remove('nav__menu--active');
        burgerBtn.classList.remove('change');
    }
    prevScrollpos = currentScrollPos;
};

const swiper = new Swiper('.services__swiper', {
    loop: true,

    navigation: {
        nextEl: '.swiper__next',
        prevEl: '.swiper__prev',
    },
    spaceBetween: 10,
});

// Accordion
const questions = document.querySelectorAll('.questions__question-header');


questions.forEach(question => {
    question.addEventListener('click', () => {
        question.nextSibling.nextSibling.classList.toggle('questions__question-content--active');
        question.classList.toggle('questions__question-header--active');
    });
});

const swiperTwo = new Swiper('.reviews__swiper', {
    loop: true,

    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },
    spaceBetween: 10,
});

let btnModal = document.querySelectorAll('[data-modal]'),
    closed = document.querySelector('.closed'),
    modal = document.querySelector('.modal');

btnModal.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('modal-active');
    })
});

closed.addEventListener('click', () => {
    modal.classList.remove('modal-active');
});