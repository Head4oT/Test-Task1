window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination]);

$(document).ready(function() {
    $('.section-title').on('click', function() {
        $('.header__menu').toggleClass('active');
        $('.section-title').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.header__menu-tabs').fadeToggle();
        $('.header__menu-tabs-content').fadeToggle();
    })

    //Portfolio swiper
    const portfolio__swiper = new Swiper('.portfolio__swiper', {
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: 'true',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    //Tabs
    $(".tabs__item").eq(0).fadeIn();
    $('.tabs__button').on('click', function () {
        $(".tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();
})


