$(function () {

    // 顶部滚动导航部分
    (function () {
        if ($('.scrollBox').length != 0) {
            new IScroll('.scrollBox', {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });
        }
    })();

    // 选择银行导航部分
    (function () {

        // 导航折叠和展开
        $('.unfold').on('tap', function () {
            $('.gray_fg').toggleClass('hide');
            if (!$('.gray_fg').hasClass('hide')) {
                $('.unfold>span').html('&#xe78f;');
                $('.foldNav').stop(true).fadeIn(400);
            } else {
                $('.unfold>span').html('&#xe791;');
                $('.foldNav').stop(true).fadeOut(400);
            }
        })

        // 点击灰色阴影部分，收起折叠导航
        $('.gray_fg').on('tap', function () {
            $('.unfold>span').html('&#xe791;');
            $('.foldNav').stop(true).fadeOut(400);
            $(this).addClass('hide');
        });

        // 点击滚动导航，同步折叠导航里的高亮样式
        $('#sliderSegmentedControl').on('tap', '.mui-control-item', function () {
            $('.foldNav li').eq($(this).data('id')).addClass('active').siblings().removeClass('active');
        });

        // 滑动滚动区域，同步折叠导航里的高亮样式
        $('.mui-slider').on('slide', function (event) {
            $('.foldNav li').eq(event.originalEvent.detail.slideNumber).addClass('active').siblings().removeClass('active');
        });

        // 点击折叠导航里的选项
        $('.foldNav').on('tap', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active');

            // 滚动导航同步到选择的位置
            // mui.trigger($('.mui-control-item').eq($(this).children('a').data('id'))[0], 'mousedown');
            mui.trigger($('.mui-control-item').eq($(this).children('a').data('id'))[0], 'touchstart');
            mui.trigger($('.mui-control-item').eq($(this).children('a').data('id'))[0], 'tap');

            // mui('#slider').slider().gotoItem($(this).children('a').data('id'));

            // 选择后自动关闭折叠导航
            if (!$('.gray_fg').hasClass('hide')) {
                // 阴影消失，导航收起，改变箭头方向
                $('.gray_fg').addClass('hide');
                $('.foldNav').fadeOut(400);
                $('.unfold>span').html('&#xe791;');
            }
        });
    })();

    // 处理mui导致a链接失效问题
    mui('.newsList').on('tap', 'a', function () {
        document.location.href = this.href;
    });

    // 下拉刷新功能
    mui.init();
    (function ($) {
        //阻尼系数
        var deceleration = mui.os.ios ? 0.003 : 0.0009;
        $('.mui-scroll-wrapper').scroll({
            bounce: true,
            indicators: true, //是否显示滚动条
            deceleration: deceleration
        });
        $.ready(function () {
            //循环初始化所有下拉刷新，上拉加载。
            $.each(document.querySelectorAll('.my_refresh'), function (index, pullRefreshEl) {
                $(pullRefreshEl).pullRefresh({
                    down: {
                        callback: function () {
                            var self = this;
                            setTimeout(function () {
                                $($('.my_refresh')[index]).pullRefresh().endPulldownToRefresh();
                            }, 1000);
                        }
                    },
                    // up: {
                    //     callback: function() {
                    //         var self = this;
                    //         setTimeout(function() {
                    //             // var ul = self.element.querySelector('.mui-table-view');
                    //             // ul.appendChild(createFragment(ul, index, 5));
                    //             self.endPullupToRefresh();
                    //         }, 1000);
                    //     }
                    // }
                });
            });
        });
    })(mui);

    // var item2Show = false,item3Show = false;//子选项卡是否显示标志
    // document.querySelector('.mui-slider').addEventListener('slide', function(event) {
    //   if (event.detail.slideNumber === 1&&!item2Show) {
    //     //切换到第二个选项卡
    //     //根据具体业务，动态获得第二个选项卡内容；
    //     var content = "....";
    //     //显示内容
    //     document.getElementById("item2").innerHTML = content;
    //     //改变标志位，下次直接显示
    //     item2Show = true;
    //   } else if (event.detail.slideNumber === 2&&!item3Show) {
    //     //切换到第三个选项卡
    //     //根据具体业务，动态获得第三个选项卡内容；
    //     var content = "....";
    //     //显示内容
    //     document.getElementById("item3").innerHTML = content;
    //     //改变标志位，下次直接显示
    //     item3Show = true;
    //   }
    // });
});