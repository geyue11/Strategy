$(function(){
    // 下拉刷新功能
    common_refresh(function(){
        setTimeout(function(){
            mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
        }, 1000);
    });
});