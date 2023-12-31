export const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
})