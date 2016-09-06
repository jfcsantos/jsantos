// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.sidebar-wrapper ul li a').click(function(){ 
            $(".body-wrapper").toggleClass("toggled");
    });

    // // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 100
    //     }
    // })

    $(".navbar-toggle").click(function(e) {
        e.preventDefault();
        $(".body-wrapper").toggleClass("toggled");
    });

})(jQuery); // End of use strict
