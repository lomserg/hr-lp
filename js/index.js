const parentContainer = document.querySelector('.read-more-container')

parentContainer.addEventListener('click', e => {
    const current = e.target

    const isReadMoreBtn = current.className.includes('read-more-btn')

    if (!isReadMoreBtn) {
        return
    }

    const currentText = e.target.parentNode.querySelector('.read-more-text')

    currentText.classList.toggle('read-more-text--show')
    current.textContent = current.textContent.includes('Подробнее') ? "Скрыть" : "Подробнее"
})

var swiper = new Swiper(".team-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    }
})

var swiper = new Swiper(".team-slider2", {
    loop: false,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    }
})