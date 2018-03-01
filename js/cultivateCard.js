$(function () {

    // 进入该页面，滚动导航部分显示最右侧内容
    $('.scrollNav .scrollBox #scroller').addClass('rightOut');

    // 顶部选项卡切换
    (function () {
        $('.optionControlBox').on('tap', '.item', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    })();

    // 滚动导航部分
    (function () {
        if ($('.scrollBox').length != 0) {
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
            // 滚动时，移除显示右边内容的类
            refreshScroll.on('scroll', function () {
                $('.scrollNav .scrollBox #scroller').removeClass('rightOut');
            });
        }
    })();

    // 下拉刷新功能
    common_refresh(function(){
        setTimeout(function(){
            mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
        }, 1000);
    });
});