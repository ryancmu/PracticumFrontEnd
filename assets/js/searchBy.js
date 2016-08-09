/**
 * Created by zhangchuhui on 8/1/16.
 */
$(document).ready(function(e){
    $('.search-panel-multi .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel-multi span#search_concept_multi').text(concept);
        $('.input-group #search_param_multi').val(param);
    });
});

