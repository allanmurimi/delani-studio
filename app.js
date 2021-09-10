// $(function($){
//     $('.what-img').hover(function(){
//         $('.what-content').toggle();
//     })
// })

$(function($){
    $('.what-img').on("click",function(event){
        $('.what-content-1').toggle();
        $('.what-content-2').toggle();
        $('.what-content-3').toggle();
    })
})