/**
 * Created by zhangchuhui on 8/4/16.
 */


$(function () {

    $("#livefeed").hide();

    $("#showlivefeed").click(function () {
        $("#livefeed").show();
    });
})

$(function () {

    $("#feb").hide();

    $("#showfeb").click(function () {
        $("#feb").show();
    });
})

// $.fn.infiniteScrollUp=function(){
//     var self=this,kids=self.children()
//     kids.slice(2)
//     setInterval(function(){
//         kids.filter(':hidden').eq(0).slideDown()
//         kids.eq(0).slideUp(function(){
//             $(this).appendTo(self)
//             kids=self.children()
//         })
//     },10000)
//     return this
// }
// function cvt(s){
//     return function(){
//         return $(s).html( $(this).html())
//     }
// }
// $(function(){
//      $('tbody').replaceWith(cvt('<tbody/>'))
//      $('tr').replaceWith(cvt('<div/>'))
//      $('td').replaceWith(cvt('<td/>'))
//      // $('th').replaceWith(cvt('<th/>'))
//      $('tbody').infiniteScrollUp()
// });

// $(function(){
//     $('#livefeed').vTicker({
//         speed: 500,
//         pause: 3000,
//         animation: 'fade',
//         mousePause: false,
//         showItems: 1
//     });
// });
