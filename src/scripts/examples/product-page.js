$(window).load(function() {
    $("#flexiselDemo1").flexisel({
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 3
            },
            landscape: {
                changePoint:640,
                visibleItems: 3
            },
            tablet: {
                changePoint:768,
                visibleItems: 3
            }
        }
    });


    $("#flexiselDemo2").flexisel({
        enableResponsiveBreakpoints: true,
        visibleItems: 6,
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 2
            },
            tablet: {
                changePoint:768,
                visibleItems: 3
            }
        }
    });
});