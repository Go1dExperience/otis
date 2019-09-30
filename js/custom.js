// Wow Animation
// New Wow Animation
$(function() {
    // animate on scroll
    new WOW().init();
});
// Product (Owl Carousel)
$(function(){
    $('#item-list').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        });
});
// Categories (Owl Carousel)
$(function() {
    // owl carousel
    $("#item-list2").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
    });
});
// Smooth Scroll
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        // Get Href Attribute
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250, "easeInOutExpo");
    });
});