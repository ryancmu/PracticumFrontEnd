/**
 * Created by zhangchuhui on 8/4/16.
 */

$(function() {
    $('#table-body').vTicker('init', {speed: 400,
        pause: 500,
        showItems: 5,
        padding:5,

    });

    $("#closeLF").click(function () {
        $("#livefeed").hide();
    });


});

