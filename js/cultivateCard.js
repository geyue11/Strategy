$(function(){
    // 顶部选项卡切换
    (function(){
        $('.optionControlBox').on('click','.item',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    })();
});