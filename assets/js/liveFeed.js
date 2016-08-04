/**
 * Created by zhangchuhui on 8/4/16.
 */
$.fn.infiniteScrollUp=function(){
    var self=this,kids=self.children()
    kids.slice(4)
    setInterval(function(){
        kids.filter(':hidden').eq(0).slideDown()
        kids.eq(0).slideUp(function(){
            $(this).appendTo(self)
            kids=self.children()
        })
    },2000)
    return this
}
function cvt(s){
    return function(){
        return $(s).html( $(this).html())
    }
}
$(function(){
    $('tbody').replaceWith(cvt('<tbody/>'))
    $('tr').replaceWith(cvt('<tr/>'))
    $('td').replaceWith(cvt('<td/>'))
    $('th').replaceWith(cvt('<th/>'))
    $('tbody').infiniteScrollUp()
});
