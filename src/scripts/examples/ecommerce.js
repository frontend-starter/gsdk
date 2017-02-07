var big_image;
var transparent = true;

$().ready(function(){
    responsive = $(window).width();

    $(window).on('scroll', checkScroll);

    if (responsive >= 768){
        big_image = $('.parallax-image').find('img');

        $(window).on('scroll',function(){
            parallax();
            checkScroll();
        });
    }

});

function checkScroll(){
    if($(document).scrollTop() > 260 ) {
        if(transparent) {
            transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent').addClass('navbar-default');
        }
    } else {
        if( !transparent ) {
            transparent = true;
            $('nav[role="navigation"]').addClass('navbar-transparent').removeClass('navbar-default');
        }
    }
}

var parallax = function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    big_image.css('top',oVal);
};
