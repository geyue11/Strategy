$(function () {
    // 轮播图部分
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: 3000, //自动轮播
        autoplayDisableOnInteraction: false, //用户操作之后，继续轮播
        loop: true,
        coverflow: {
            rotate: 0, // 旋转角度
            stretch: -30, //间距
            depth: 200, //立体程度
            modifier: 1,
            slideShadows: true
        }
    });
});