
$(document).ready(function() { 

    $('.menu').click(function() {
        $('.header__nav nav ul').toggleClass('on_menu');
    });
    $('.header__nav nav ul li').click(function() {
        $('.header__nav nav ul').toggleClass('on_menu');
    });
   
});