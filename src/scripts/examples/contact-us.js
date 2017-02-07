var parallax_map;
$().ready(function(){
    responsive = $(window).width();

    examples.initContactUsMap();

    if (responsive >= 768){
        parallax_map = $('.parallax').find('.big-map');

        $(window).on('scroll',function(){
            parallax();
            gsdk.checkScrollForTransparentNavbar();
        });
    }

});

var parallax = function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    parallax_map.css('top',oVal);
};
