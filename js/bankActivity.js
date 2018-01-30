$(function(){
    // $('.foldNavBox').css({
    //     height: $('.foldNav>ul').height(),
    //     position: 'relative'
    // });
    $('.unfold').on('click',function(){
        $('.foldNav').toggleClass('fold');
        $('.gray_fg').toggleClass('hide');
        if(!$('.gray_fg').hasClass('hide')){
            $('.unfold').html('&#xe78f;');
        }else {
            $('.unfold').html('&#xe791;');
        }
    })
});