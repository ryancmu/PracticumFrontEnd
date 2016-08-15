/**
 * Created by zhangchuhui on 8/4/16.
 */


$(function () {

    $("#livefeed").hide();

    $("#showlivefeed").click(function () {
        $("#livefeed").show();
        $(function() {
            $('#table-body').vTicker('init', {speed: 400,
                pause: 500,
                showItems: 5,
                padding:5,

            });
        });
    });

    $("#closeLF").click(function () {
        $("#livefeed").hide();
    });
})

$(function () {

    $("#feb").hide();

    $("#showfeb").click(function () {
        $("#feb").show();
    });

    $("#closeLine").click(function(){
        $("#feb").hide();
    });
})

