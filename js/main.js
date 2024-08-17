$(document).ready(function () {
    var owl = $(".SliderStart .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false, // Disable default navigation
        items: 1,
        autoplay: true,
        autoplaySpeed: 800,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});

// Date
$(function () {
    $("#checkin-date, #checkout-date").datepicker({
        dateFormat: "mm/dd/yy"
    });
});

// Suites

$(document).ready(function () {
    $(".suitesCard .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
});

// Testimonial

$(document).ready(function () {
    $(".testimonialSection .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
// Date
$(function () {
    $("#checkInDate").datepicker({
        dateFormat: "mm/dd/yy"
    });
    $("#checkOutDate").datepicker({
        dateFormat: "mm/dd/yy"
    });
});
