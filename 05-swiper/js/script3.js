// 썸네일 슬라이더를 먼저 정의 (위에 있는것)
const bottomSlider = new Swiper(".bottom-slider", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true, // 뷰포트 안에서만 키보드 제어가 활성화됨
    },
});
const topSlider = new Swiper(".top-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: bottomSlider,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true, // 뷰포트 안에서만 키보드 제어가 활성화됨
    },
});

//컨트롤 D : 같은 단어 수정
