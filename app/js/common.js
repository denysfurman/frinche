
$(document).ready(function() {
   $('.main_slider').owlCarousel({
       nav:false,
       loop:true,
       items:1

   });
    $('.logo_slider_wr').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:2
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
    $('#datepicker10').datepicker({
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


    //registr menu
    $('.registration_nav .next').click(function() {

        $('.registration_nav .wrapper').animate( { scrollLeft: '+=80' }, 300 );

    });

    $('.registration_nav .previous').click(function() {
        $('.registration_nav .wrapper').animate( { scrollLeft: '-=80' }, 300 );
    });

    //partisipant table
    $('.participant_table_scroll .next').click(function() {

        $('.participant_table_scroll .wrapper').animate( { scrollLeft: '+=100' }, 300 );

    });

    $('.participant_table_scroll .previous').click(function() {
        $('.participant_table_scroll .wrapper').animate( { scrollLeft: '-=100' }, 300 );
    });

    //point
    $('.email_cust_menu .page_point').click(function() {

        $('.email_cust_menu').toggleClass("active");

    });

    //mail list buttton
    $('.menu-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('close');
        $('.message_list').slideToggle();
    });
    //sitebar

    $('.menu-link-sitebar').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('close');
        $('.sitebar').slideToggle();
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
    $('.tabs.custom_tab a').click(function(e){
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

    if (screen.width > 767) {
        $('.main_icon_item').click(function(){
            $(this).addClass("active");

            return false;
        });
        $('.main_icon_item_close').click(function(){
            $(this).parents(".main_icon_item").removeClass("active");
            return false;
        });
    }
    else {

        $('.main_icon_item').click(function(){
            return false;
        });
    }

    //main_icon


    //menu button
    var wrapperMenu = document.querySelector('.wrapper-menu');

    wrapperMenu.addEventListener('click', function(){
        wrapperMenu.classList.toggle('open');
        $('.wrapper-menu-wrap nav').slideToggle(150);
    })

    //form
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            switch(e.type) {
                case 'keyup': {
                    $parent.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                    if( $this.val() == '' ) {
                        $parent.addClass('js-hide-label');
                    } else {
                        $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    }
                } break;
                case 'focus': {
                    if( $this.val() !== '' ) {
                        $parent.removeClass('js-unhighlight-label');
                    }
                } break;
                default: break;
            }

        });
    }

    //switch checkbox
    $('.switch').change(function(){
        $(this).toggleClass('checked');
    });

    //participant on/off
    $('.participant_item ul a').click(function(){

        $(".participant_item_sett").not($(this).next()).slideUp();
        $(this).next(".participant_item_sett").slideToggle();
    });


    tinymce.init({
        selector: '.redactor textarea',
        width: 100% - 2,
        height: 200,
        plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image'

        ],

        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tinymce.com/css/codepen.min.css'
        ]
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

$(document).foundation();


$(document).ready(function() {
    //chart dashbord menu
    $('.chart_sett span').click(function(){
        $(".chart_sett_label").slideToggle();

    });
    //charrt dashbord


    function chartDashbord() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["Mon", "Tue", "Wen", "Thu  ", "Fri", "Sat", "Sun"],
                datasets: [{
                    label: "Statistic #1",
                    backgroundColor: 'transparent',
                    borderColor: '#4bb9ff',
                    data: [0, 8, 5, 2, 2, 3, 5],

                }, {
                    label: "Statistic #2",
                    backgroundColor: 'transparent',
                    borderColor: '#ff6e6e',
                    data: [1, 5, 7, 5, 8, 4, 1],

                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    display: false,

                }
            }
        });
    }
    if($("#myChart").length>0) {
        chartDashbord();
    }



});