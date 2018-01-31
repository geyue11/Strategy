$(function () {
    // 初始化swiper轮播图
    (function () {
        var mySwiper = new Swiper('.swiper-container', {
            // 分页器
            pagination: '.swiper-pagination',
            // 循环播放
            loop: true,
            autoplay: 3000, //自动轮播
            autoplayDisableOnInteraction: false //用户操作之后，继续轮播
        })
    })();

    // 底部对比盒子向左滑动动画
    (function () {
        $('.compareBox>.left').on('click', function () {
            if ($('.compareBox>.right').css('left') == '-1000px') {
                $('.compareBox>.right').animate({
                    left: 0
                }, 1000);
                $('.compareBox>.left').animate({
                    width: '2.5rem'
                }, 300);
            } else {
                $('.compareBox>.right').animate({
                    left: -1000
                }, 1000);
                $('.compareBox>.left').animate({
                    width: '1.5rem'
                }, 300);
            }
        });
    })();

    // 选项导航滑动固定
    (function () {
        $(window).on('scroll', function (e) {
            if ($(window).scrollTop() >= $('.ad').height()) {
                $('.selectOption').css({
                    position: 'fixed',
                    top: '45px'
                });
                $('body').css('padding-top', $('.selectOption').height() + 45);
                $('.ad').css('margin-top', 0);
            } else {
                $('.selectOption').css({
                    position: 'relative',
                    top: '0'
                });
                $('body').css('padding-top', 0);
                $('.ad').css('margin-top', 45);
            }
        });
    })();

    // 选项导航切换部分
    (function () {
        // 点击导航，显示对应的盒子
        $('.selectOption').on('click', '.optionNav>.item', function (e) {
            $('.optionBox').fadeIn(300);
            $('.gray_fg').removeClass('hide');
            for (var i = 1; i < 4; i++) {
                if ($(e.currentTarget).hasClass('item' + i)) {
                    $('.optionBox>.boxes>.box' + i).removeClass('hide').siblings().addClass('hide');
                }
            }
        });

        // 点击内容盒子，收起内容盒子
        $('.optionBox').on('click', function () {
            $(this).fadeOut(300);
            $('.gray_fg').addClass('hide');
        });

        // 点击选项
        $('.optionBox').on('click', '.box span', function () {
            $(this).addClass('active').siblings().removeClass('active');
            for (var i = 1; i < 4; i++) {
                if ($(this).parent().hasClass('box' + i)) {
                    $('.selectOption .optionNav .item' + i + '>.title').text($(this).text());
                }
            }
        });
    })();

    // 添加对比，移除对比选项
    (function () {
        // 装对比选项的容器
        var content = $('.compareBox .right>.content');

        // 点击 '+对比' 标签
        $('.loansList').on('click', ' .compare', function () {
            // 若底部对比盒子为折叠状态，则展开
            if ($('.compareBox>.right').css('left') == '-1000px') {
                $('.compareBox>.right').animate({
                    left: 0
                }, 1000);
                $('.compareBox>.left').animate({
                    width: '2.5rem'
                }, 300);
            }
            // 超过两个，则移除前一个
            if (content.children().length >= 2) {
                content.children().eq(0).remove();
            }
            content.append('<div class="compareItem"><img src="./images/LOGO_360借条.png" alt=""><span class="iconfont">&#xe6c4;</span></div>');
        });

        // 点击移除小图标，移除选项
        $('.compareBox').on('click', '.right .compareItem span', function () {
            $(this).parent().remove();
        })

        // 点击去对比
        $('.toCompare').on('click', function () {
            if (content.children().length < 2) {
                layer.open({
                    content: '请选择两个商品',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                }, 1000);
                return false;
            }
        });
    })();
});