$(function () {
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
	mui('body').on('tap', 'a', function () {
		document.location.href = this.href;
	});

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
						setTimeout(() => {
							mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
						}, 1000);
					} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
				},
				up: {
					height: 50, //可选.默认50.触发上拉加载拖动距离
					//auto: true, //可选,默认false.自动上拉加载一次
					contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
					//contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
					callback: function () {
						setTimeout(() => {
							this.endPullupToRefresh(true);
						}, 1000);
					} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
				}
			}
		});

		// var btnTips = $('.mui-pull-bottom-tips');
		// btnTips.style.display = 'none';

	})();


	// 懒加载部分
	(function () {
		// mui.init();

		for (var i = 0; i <= 20; i++) {
			$('.newsList').append(`<li>
				<a href="http://www.baidu.com" class="content">
					<div class="right">
						<img class="lazy" data-original="./images/1.jpg">
					</div>
					<div class="left">
						<div class="title">通付云闪付操作指南通付云闪付操作指南通付云闪付操作指</div>
						<div class="watch">
							<span class="iconfont">&#xe681;</span>
							<span>13456</span>
						</div>
					</div>
				</a>
			</li>`);
		}

		$('.newsList').append(`<li>
		<a href="http://www.baidu.com" class="content">
			<div class="right">
				<img class="lazy" data-original="./images/LOGO_51零用钱.png">
			</div>
			<div class="left">
				<div class="title">通付云闪付操作指南通付云闪付操作指南通付云闪付操作指</div>
				<div class="watch">
					<span class="iconfont">&#xe681;</span>
					<span>13456</span>
				</div>
			</div>
		</a>
	</li>`);

		// var lazyLoad = mui(document).imageLazyload({
		// 	placeholder: './images/60x60.gif',
		// 	destroy: false
		// });
		// lazyLoad.refresh(true);

		$("img.lazy").lazyload({effect: "fadeIn"});


	})();

});