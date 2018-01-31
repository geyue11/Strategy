$(function(){

    // 顶部折叠导航部分
    (function(){

        // 导航折叠和展开
        $('.unfold').on('click',function(){
            $('.foldNav').toggleClass('fold');
            $('.gray_fg').toggleClass('hide');
            if(!$('.gray_fg').hasClass('hide')){
                $('.unfold').html('&#xe78f;');
            }else {
                $('.unfold').html('&#xe791;');
            }
        })
    
        // 点击选项
        $('.foldNav').on('click','li',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.foldNav .static').after($(this));
            // $(this).remove();
            // $(this).prependTo
            // 选择后自动关闭折叠导航
            if(!$('.gray_fg').hasClass('hide')){
                $('.gray_fg').addClass('hide');
                $('.foldNav').addClass('fold');
                $('.unfold').html('&#xe791;');
                // $('.unfold').html('&#xe78f;');
            }
        });

    })();
});