$(function () {
    // // 滚动导航部分
    // (function () {
    //     if ($('.scrollBox').length != 0) {
    //         new IScroll('.scrollBox', {
    //             eventPassthrough: true,
    //             scrollX: true,
    //             scrollY: false,
    //             preventDefault: false
    //         });
    //     }
    // })();

    // 下拉刷新部分
    (function () {
        // // 动态设置滚动容器的高度
        // var windowHeight = $(window).height() - parseInt($('body').css('padding-top'));
        // $('#wrapper').css('height', windowHeight);
        // // 等待设置完成后初始化
        // setTimeout(() => {
        //     var refreshScroll = new IScroll('#wrapper', {
        //         scrollbars: false,
        //         mouseWheel: false,
        //         interactiveScrollbars: true,
        //         shrinkScrollbars: 'scale',
        //         fadeScrollbars: true,
        //         scrollY: true,
        //         probeType: 2,
        //         bindToWrapper: true
        //     });

        //     refreshScroll.on("scroll", function () {
        //         console.log(this.y);
        //         if (this.y > 40) {
        //             $('#pullDown').fadeIn(400);
        //             // layer.open({
        //             //     type: 2,
        //             //     content: '加载中'
        //             // });
        //             // setTimeout(() => {
        //             //     layer.closeAll();
        //             // }, 1000);
        //             setTimeout(() => {
        //                 $('#pullDown').slideUp(400);
        //             }, 1000);
        //         }
        //     })
        // }, 100);


        // 下拉刷新部分
        mui.init({
            pullRefresh: {
                container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
                down: {
                    height: 50, //可选,默认50.触发下拉刷新拖动距离,
                    //auto: true, //可选,默认false.首次加载自动下拉刷新一次
                    contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
                    contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
                    contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
                    callback: function pullfresh() {
                        // layer.open({
                        //     type: 2
                        // });
                        
                        // setTimeout(() => {
                        //     layer.closeAll();
                        // }, 1000);
                        setTimeout(() => {
                            mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
                        }, 1000);
                    } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                }
            }
        });


    })();
});