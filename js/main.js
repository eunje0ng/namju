$(function(){
    menu();
    setInterval(slide, 5000);
})

function menu(){
    $("#gnb > li").mouseenter(function(){
        $(".lnb-bg").stop().slideDown("fast");
        $(".lnb").stop().slideDown("fast");
    })
    $("#gnb > li").mouseleave(function(){
        $(".lnb-bg").stop().slideUp();
        $(".lnb").stop().slideUp();
    })
}

function slide(){
    let currItem = $("#items li.top");
    let nextItem = currItem.next();   
    if(!nextItem.length) nextItem = $("#items li:first");
    currItem.removeClass("top");
    nextItem.addClass("top");
}