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

});
