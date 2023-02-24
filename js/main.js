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