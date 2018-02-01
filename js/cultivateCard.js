$(function(){
    // 滚动导航部分向左划出
    // #scroller {
    //     transform: translate(-25px, 0px) translateZ(0px);
    // }
    $('#scroller').css({
        'transform':'translate(-25px, 0px) translateZ(0px)',
        // 'transition' : 'all .1s'
    });
    // 顶部选项卡切换
    (function(){
        $('.optionControlBox').on('click','.item',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    })();
});