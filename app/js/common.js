$(function() {

	// language

    $('.language-select,.money-select').click(function(){
        $(this).toggleClass('open');
    })

    $('.language-select li ,.money-select li').click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).toggleClass('active');
    })

});
