window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination]);

$(document).ready(function() {

    $('.section-title').on('click', function() {
        $('.header__menu').toggleClass('active');
        $('.header__container').toggleClass('active');
        $('.header__menu-tabs').toggleClass('active');
        $('.section-title').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.header__menu-tabs').fadeToggle();
        $('.header__menu-tabs-content').fadeToggle();
    })

    //Tabs
    $(".tabs__item").eq(0).fadeIn();
    $('.tabs__button').on('click', function () {
        $(".tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();

    //Company swipers
    const company__swiper1 = new Swiper('.company__swiper-first', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 6,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
            },
            680: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 6,
            },
        }
    })

    const company__swiper2 = new Swiper('.company__swiper-second', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 6,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
            },
            680: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 6,
            },
        }
    })
})


