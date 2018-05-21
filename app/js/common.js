$(function() {

	// language header
    $('.language-select,.money-select').click(function(){
        $(this).toggleClass('open');
    })

    $('.language-select li ,.money-select li').click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).toggleClass('active');
    })

    //popup
    $(".popup").fancybox({
        toolbar: false,
        protect: true,
        touch: false,
        smallBtn: true

    })
    //formStyle
    //select
    $('.form_style').styler({
        selectSearch: true
    });

    //date
    $('#datepicker').datepicker({
        autoclose: true,
        format: 'mm/dd/yyyy'

    });
    $('#datepicker2').datepicker({
        autoclose: true,
        format: 'mm/dd/yyyy'

    });
    $('#datepicker3').datepicker({
        autoclose: true,
        format: 'mm/dd/yyyy'

    });
    $('#datepicker4').datepicker({
        autoclose: true,
        format: 'mm/dd/yyyy'

    });
    $(document).mouseup(function (e) {
        var container = $(".input-group.date ");
        if (container.has(e.target).length === 0){
            $('.datepicker').datepicker('destroy');
            $('.datepicker').hide();
        }
    });



    //advance setting
    $('.advance_setting span').click(function(){
        $(".hidden_advance").slideToggle();
        $(this).toggleClass("active");
    });





});


//  mobile menu
jQuery(document).ready(function($){
    var $lateral_menu_trigger = $('#cd-menu-trigger'),
        $content_wrapper = $('.cd-main-content'),
        $navigation = $('header');

    //open-close lateral menu clicking on the menu icon
    $lateral_menu_trigger.on('click', function(event){
        event.preventDefault();

        $lateral_menu_trigger.toggleClass('is-clicked');
        $navigation.toggleClass('lateral-menu-is-open');
        $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            $('body').toggleClass('overflow-hidden');
        });
        $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
        $('body').toggleClass('shadow');
        $('.cd-navigation li').toggleClass('inner');

        //check if transitions are not supported - i.e. in IE9
        if($('html').hasClass('no-csstransitions')) {
            $('body').toggleClass('overflow-hidden');
        }
    });
});
