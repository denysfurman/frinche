
$(document).ready(function() {
   $('.main_slider').owlCarousel({
       nav:false,
       loop:true,
       items:1

   });
    $('.logo_slider_wr').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

	// language header
    $('.language-select,.money-select').click(function(){
        $(this).toggleClass('open');
    });

    $('.language-select li ,.money-select li').click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).toggleClass('active');
    });

    //popup
    $(".popup").fancybox({
        toolbar: false,
        protect: true,
        touch: false,
        smallBtn: true

    });
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
    $('#datepicker5').datepicker({
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
    //search
    $('.search').click(function(){
        $(".serch_block").slideToggle();
    });

    //tabs
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    });

    /* Fixed Navigation */
    if ($('header').offset().top > 20) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }

    /* Scroll Function */
    $(window).scroll(function() {
        /* Fixed Navigation */
        if ($('header').offset().top > 20) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    });
    //main_icon
    $('.main_icon_item').click(function(){
        $(this).addClass("active");
        return false;
    });
    $('.main_icon_item_close').click(function(){
        $(this).parents(".main_icon_item").removeClass("active");
        return false;
    });

    //menu button
    var wrapperMenu = document.querySelector('.wrapper-menu');

    wrapperMenu.addEventListener('click', function(){
        wrapperMenu.classList.toggle('open');
    })

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

// $(document).foundation();
