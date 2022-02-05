
let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 45,

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

});