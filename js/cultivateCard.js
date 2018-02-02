$(function () {
    // 滚动导航部分向左划出
    // #scroller {
    //     transform: translate(-25px, 0px) translateZ(0px);
    // }

    // 滚动导航部分

    // if ($('.scrollBox').length != 0) {
    var refreshScroll = new IScroll('.scrollBox', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false,
        scrollbars: false,
        mouseWheel: false,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        scrollY: true,
        probeType: 2,
        bindToWrapper: true
    });
    console.log(refreshScroll)
    refreshScroll.startX = -25;
    // setTimeout(() => {
    //     var max = refreshScroll.maxScrollX;
    //     refreshScroll.startX = max;
    // }, 100);
    

    // refreshScroll.on("scroll", function () {
    //     // alert(1);
    //     this.x = this.maxScrollX;
    //     console.log(this);
    // });

    // 顶部选项卡切换
    (function () {
        $('.optionControlBox').on('click', '.item', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    })();
});
// $('#scroller').css({
//     'transform': 'translate(-1.5625rem, 0px) translateZ(0px)',
//     // 'transition' : 'all .1s'
// });

