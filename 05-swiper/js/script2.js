const tobSlider = new Swiper(".tob-slider", {
    // Optional parameters
    direction: "horizontal", //vertical
    loop: true,
    autoplay: true, //자동으로 슬라이드 적용
    speed: 1000, //기본값 300 = 0.3초
    effect: "slide", //slide, fade:오버레이 처럼 넘어가는것, cube, flip, coverflow

    // 캐러셀 만들기
    slidesPerView: 3, // 보여질 슬라이드 갯수
    spaceBetween: 20, // 간격 20px

    // If we need pagination
    pagination: {
        el: ".top-slider-wrap .pagination",
        clickable: true, // 페이지네이션 클릭이 되도록 만드는것
    },

    // Navigation arrows
    navigation: {
        nextEl: ".top-slider-wrap .btn-next",
        prevEl: ".top-slider-wrap .btn-prev ",
    },
});
