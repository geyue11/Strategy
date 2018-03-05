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

	// 选项导航滑动固定
	(function () {
		$(window).on('scroll', function (e) {
			if ($(window).scrollTop() >= $('.ad').height()) {
				$('.selectOption').css({
					position: 'fixed',
					top: '0'
				});
				$('body').css('padding-top', $('.selectOption').height());
				$('.ad').css('margin-top', 0);
			} else {
				$('.selectOption').css({
					position: 'relative',
					top: '0'
				});
				$('body').css('padding-top', 0);
				// $('.loansList').css('margin-top', 45);
			}
		});
	})();

	// 选项导航切换部分
	(function () {
		// 点击导航，显示对应的盒子
		$('.selectOption').on('click', '.optionNav>.item', function (e) {
			$(this).children('.iconfont').css({
				transform: 'rotate(180deg) translateY(50%)',
				transition: 'all .2s'
			}).end().siblings().children('.iconfont').css({
				transform: 'translateY(-50%)',
				transition: 'all .2s'
			});
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
			$('.selectOption .optionNav>.item').children('.iconfont').css({
				transform: 'translateY(-50%)',
				transition: 'all .2s'
			});
			$(this).fadeOut(300);
			$('.gray_fg').addClass('hide');
		});

		// 点击灰色阴影部分，收起内容盒子
		$('.gray_fg').on('click',function(){
			$('.optionBox').trigger('click');
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

	// 底部对比盒子
	(function () {
		// 添加过渡
		$('.compareBox>.left').css('transition','width .5s');
		$('.compareBox').css('transition','width .5s');

		// 装对比选项的容器
		var content = $('.compareBox .right>.content');

		// 底部对比盒子向左滑动动画
		$('.compareBox>.left').on('click', function () {
			// console.log($(window).width());
			// $(window).width();
			if ($('.compareBox>.right').css('left') == '-1000px') {
				$('.compareBox>.right').css({
					left: 0
				});
				$('.compareBox>.left').css({
					width: '2.5rem',
				});
				$('.compareBox').css({
					width: '100%'
				});
				$('.compareBox>.left').html('<img src="./images/icon_Arrow@2x.png" alt=""><p>收</p><p>起</p>');
			} else {
				$('.compareBox>.right').css({
					left: -1000
				});
				$('.compareBox>.left').css({
					width: '1.5rem'
				});
				$('.compareBox').css({
					width: '2.5rem'
				});
				$('.compareBox>.left').html('<img src="./images/icon_Arrow_right@2x.png" alt=""><p>打</p><p>开</p>');
			}
		});

		// 添加对比，移除对比选项
		// 点击 '+对比' 标签
		$('.loansList').on('click', ' .compare', function (e) {
			// 阻止页面默认跳转
			e.preventDefault();
			// 若底部对比盒子为折叠状态，则展开
			if ($('.compareBox>.right').css('left') == '-1000px') {
				$('.compareBox').css({
					width: '100%'
				});
				$('.compareBox>.right').css({
					left: 0
				});
				$('.compareBox>.left').css({
					width: '2.5rem'
				});
				$('.compareBox>.left').html('<img src="./images/icon_Arrow@2x.png" alt=""><p>收</p><p>起</p>');
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