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
            var refreshScroll = new IScroll('#wrapper');
            
            // refreshScroll.options
            refreshScroll.on('scrollEnd', function (e) {
                console.log(refreshScroll.options);
            });

            console.log(refreshScroll.options.onScrollMove);

            // refreshScroll.options.onScrollMove(function(e){
            //     console.log(e);
            // });
            // refreshScroll.onscroll(function(e){
            //     console.log(e);
            // });
        }, 100);
    })();
});