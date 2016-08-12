/**
 * Created by zhangchuhui on 8/1/16.
 */
$(document).ready(function(e){
    var $search_panels = $('.multiSearch');
    $search_panels.each(function() {
        addClickEventListner.call(this);
    });

    function add() {
        var $clone = $(".multiSearch:first").clone(false);
        addClickEventListner.call($clone);
        $clone.appendTo("#wrapper");
    }

    function remove(that) {
        that.remove();
    }

    function addClickEventListner() {
        var that = this;
        
        var $dropdown_options = $(this).find(".dropdown-menu a");
        var $dropdown_button_text = $(this).find(".dropdown_button_text");
        var $hidden_input = $(this).find('.input-group #search_param_multi');
        var $add_button = $(this).find("button.add_button");
        var $remove_button = $(this).find("button.remove_button");

        $add_button.click(add);
        $remove_button.click(function() {
            remove(that);
        });

        $dropdown_options.click(function(e) {
            e.preventDefault();
            var param = $(this).attr("href").replace("#","");
            $hidden_input.val(param);
            $dropdown_button_text.text($(this).text());
        });
    }
});

