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

	// 下拉刷新部分
	// mui.init({
	// 	pullRefresh: {
	// 		container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
	// 		down: {
	// 			height: 50, //可选,默认50.触发下拉刷新拖动距离,
	// 			//auto: true, //可选,默认false.首次加载自动下拉刷新一次
	// 			contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
	// 			contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
	// 			contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
	// 			callback: function pullfresh() {
	// 				layer.open({type: 2});
	// 				mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
	// 				setTimeout(() => {
	// 					layer.closeAll();
	// 				}, 1000);
	// 			} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	// 		}
	// 	}
	// });

	//下拉刷新功能
	// mui.init({

	// 	//配置下拉刷新以及上拉加载
	// 	pullRefresh: {
	// 		container: ".mui-scroll-wrapper",
	// 		down: {
	// 			auto: true,
	// 			//下拉刷新时触发
	// 			callback: function () {
	// 				//发送ajax，获取购物车的数据
	// 				// $.ajax({
	// 				// 	type: "get",
	// 				// 	url: "/cart/queryCart",
	// 				// 	success: function (info) {
	// 				// 		console.log(info);
	// 				// 		setTimeout(function () {
	// 				// 			if (info.error === 400) {
	// 				// 				//没登录，跳转到登录页面 , 登录成功需要回跳
	// 				// 				location.href = "login.html?retUrl=" + location.href;
	// 				// 			}
	// 				// 			//获取到的购物车数据是一个数组，渲染到页面中, info是一个数组
	// 				// 			$(".mui-table-view").html(template("tpl", {
	// 				// 				list: info
	// 				// 			}));

	// 				// 			//结束下拉刷新
	// 				// 			mui(".mui-scroll-wrapper").pullRefresh().endPulldownToRefresh();
	// 				// 		}, 1000);

	// 				// 	}
	// 				// });
	// 			}
	// 		}
	// 	}

	// });


	

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
				$('.compareBox').animate({
					width: '100%'
				});
				$('.compareBox>.left').html('<img src="./images/icon_Arrow@2x.png" alt=""><p>收</p><p>起</p>');
			} else {
				$('.compareBox>.right').animate({
					left: -1000
				}, 1000);
				$('.compareBox>.left').animate({
					width: '1.5rem'
				}, 300);
				$('.compareBox').animate({
					width: '2.5rem'
				});
				$('.compareBox>.left').html('<img src="./images/icon_Arrow_right@2x.png" alt=""><p>打</p><p>开</p>');
			}
		});
	})();

	// 添加对比，移除对比选项
	(function () {
		// 装对比选项的容器
		var content = $('.compareBox .right>.content');

		// 点击 '+对比' 标签
		$('.loansList').on('click', ' .compare', function (e) {
			// 阻止页面默认跳转
			e.preventDefault();
			// 若底部对比盒子为折叠状态，则展开
			if ($('.compareBox>.right').css('left') == '-1000px') {
				$('.compareBox').animate({
					width: '100%'
				});
				$('.compareBox>.right').animate({
					left: 0
				}, 1000);
				$('.compareBox>.left').animate({
					width: '2.5rem'
				}, 300);
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