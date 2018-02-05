$(function () {

    // 顶部折叠导航部分
    (function () {

        // 导航折叠和展开
        $('.unfold').on('tap', function () {
            $('.foldNav').toggleClass('fold');
            $('.gray_fg').toggleClass('hide');
            if (!$('.gray_fg').hasClass('hide')) {
                $('.unfold').html('&#xe78f;');
            } else {
                $('.unfold').html('&#xe791;');
            }
        })

        // 点击选项
        $('.foldNav').on('tap', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.foldNav .static').after($(this));
            // $(this).remove();
            // $(this).prependTo
            // 选择后自动关闭折叠导航
            if (!$('.gray_fg').hasClass('hide')) {
                $('.gray_fg').addClass('hide');
                $('.foldNav').addClass('fold');
                $('.unfold').html('&#xe791;');
                // $('.unfold').html('&#xe78f;');
            }
        });

    })();

    // 滚动导航部分
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

    // 处理mui导致a链接失效问题
    // mui('body').on('tap', 'a', function () {
    // 	document.location.href = this.href;
    // });

    mui.init();
    (function($) {
        //阻尼系数
        var deceleration = mui.os.ios?0.003:0.0009;
        $('.mui-scroll-wrapper').scroll({
            bounce: true,
            indicators: true, //是否显示滚动条
            deceleration:deceleration
        });
        $.ready(function() {
            //循环初始化所有下拉刷新，上拉加载。
            $.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
                $(pullRefreshEl).pullToRefresh({
                    down: {
                        callback: function() {
                            var self = this;
                            setTimeout(function() {
                                // var ul = self.element.querySelector('.mui-table-view');
                                // ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
                                self.endPullDownToRefresh();
                            }, 1000);
                        }
                    },
                    // up: {
                    //     callback: function() {
                    //         var self = this;
                    //         setTimeout(function() {
                    //             // var ul = self.element.querySelector('.mui-table-view');
                    //             // ul.appendChild(createFragment(ul, index, 5));
                    //             self.endPullUpToRefresh();
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