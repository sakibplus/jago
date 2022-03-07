$(document).ready(function(){
    // scroll to top
    $(function () {
        $(document).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });
        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    };

    /*==========================
            Scroll
    ============================*/
    $("#main-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function(){
                window.location.hash = hash;
            });
        }
    });

    // slider
    $('#home .loop').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:-1,
        autoplay:true,
        // nav: true,
        /*animateOut: 'slideOutDown',
        animateIn: 'flipInX',*/
        //autoplayTimeout:2500,
        responsive:{
            600:{
                items:1,
                stagePadding:200
            }
        },
        //animateIn: 'flipInX',
        //smartSpeed:1500
    });

    // client slider
    $('#valued-clients .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:20,
        autoPlay:true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:4,
            },
            1000:{
                items:6,
            }
        },
        smartSpeed:500
    })

    // ============= Accordions ======================
    $(document).ready(function() {
        $('.collapse').on('show.bs.collapse', function() {
            var id = $(this).attr('id');
            $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
            $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-minus"></i>');
        });
        $('.collapse').on('hide.bs.collapse', function() {
            var id = $(this).attr('id');
            $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
            $('a[href="#' + id + '"] .panel-title span').html( ' <i class="glyphicon glyphicon-plus"></i>');
        });
    });

    // ============= Accordions inner hide/show ======================
    // video hide/show
    $("#hide-video-button").click(function(){
        $("#show-more-video").hide(500);
        $("#show-video-button").show(500);
        $("#hide-video-button").hide(500);
    });
    $("#show-video-button").click(function(){
        $("#show-more-video").show(500);
        $("#show-video-button").hide(500);
        $("#hide-video-button").show(500);
    });
    
    // photo hide/show
    $("#hide-photo-button").click(function(){
        $("#show-more-photo").hide(500);
        $("#show-photo-button").show(500);
        $("#hide-photo-button").hide(500);
    });
    $("#show-photo-button").click(function(){
        $("#show-more-photo").show(500);
        $("#show-photo-button").hide(500);
        $("#hide-photo-button").show(500);
    });


});


