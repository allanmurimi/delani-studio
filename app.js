$(function($){
    $('.what-img').on("click",function(event){
        $('.what-content-1').toggle();
        $('.what-content-2').toggle();
        $('.what-content-3').toggle();
    })
})

$(function($){
    $('.portfolio-img').hover(function(){
        $('.content-img').toggle();
    })
})