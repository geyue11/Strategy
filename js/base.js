$(function () {
    // 滚动导航部分
    (function () {
        console.log($('.scrollBox'));
        if ($('.scrollBox').length != 0) {
            new IScroll('.scrollBox', {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });
        }
    })();

    // 下拉刷新部分
    (function () {
        // 动态设置滚动容器的高度
        var windowHeight = $(window).height() - parseInt($('body').css('padding-top'));
        $('#wrapper').css('height', windowHeight);
        // 等待设置完成后初始化
        setTimeout(() => {
            var refreshScroll = new IScroll('#wrapper', {
                scrollbars: false,
                mouseWheel: false,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                scrollY: true,
                probeType: 2,
                bindToWrapper: true
            });

            refreshScroll.on("scroll", function () {
                // alert(1)
                console.log(this.y);
                if (this.y > 40) {
                    layer.open({
                        type: 2,
                        content: '加载中'
                    });
                    setTimeout(() => {
                        layer.closeAll();
                    }, 1000);
                }
            })
        }, 100);
    })();
});