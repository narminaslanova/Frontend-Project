
$(function () {
    $(window).on("load", function () {
        $(".loader-image").fadeOut("hide");


    });

    $(document).on("scroll", window, function () {
        if ($(window).scrollTop() > 100) {
            $(".nav-menu").css({
                "position": "fixed",
                "background-color": "white",
                "height": "80px",
                "z-index": "999",
                "left": "0",
                "top": "0",
                "right": "0"


            });
            $("#up").css({
                "background": "linear-gradient(135deg, #1A153A 0%, #565178 100%)",

            })
        } else {
            $(".nav-menu").css({
                "position": "absolute",
                "background-color": "transparent",
                "height": "100px",
                "z-index": "999",
                "left": "0",
                "top": "0",
                "right": "0"
            });
            $("#up").css({
                "background": "#1A153A"
            });
          
        }


    });

    if ($(".nav-menu a.hamburger").length !== 0) {
        $(document).on("click", ".nav-menu a.hamburger", function () {
            if ($(this).find("span.regular").hasClass("active1")) {
                $(".nav-menu .hamburgerIcon span.regular").removeClass("active1");
                $(".nav-menu .hamburgerIcon span.after").removeClass("active1");
                $(".nav-menu .hamburgerIcon span.before").removeClass("active1");
            }
            else {
                $(".nav-menu .hamburgerIcon span.regular").addClass("active1");
                $(".nav-menu .hamburgerIcon span.after").addClass("active1");
                $(".nav-menu .hamburgerIcon span.before").addClass("active1");
            }
        })
    }

  
    if ($(".nav-item.dropdown").length !== 0) {
        $(document).on("click", ".nav-menu button.navbar-toggler", function () {
            $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            if (window.matchMedia('(max-width: 375px)').matches) {
                $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            }
            else if (window.matchMedia('(max-width: 768px)').matches) {
                $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            }
            else if (window.matchMedia('(max-width: 812px)').matches) {
                $("header nav ul.navbar-nav li.dropdown .dropdown-menu.breakPoint").removeClass("navbarHoverBlock");
            }
        })
    }

    if ($("#design a.designList").length != 0) {
        $(document).on("mouseenter", "#design a.designList", function () {



            if (!$(this).hasClass("active2")) {
                $(this).addClass("active")
            }
        })
        $(document).on("mouseleave", "#design a.designList", function () {
            if (!$(this).hasClass("active2")) {
                $(this).removeClass("active")
            }
        })
    };


    if ($("#features a.designList").length != 0) {
        $(document).on("mouseenter", "#features a.designList", function () {


            if (!$(this).hasClass("active2")) {
                $(this).addClass("active")
            }
        })
        $(document).on("mouseleave", "#features a.designList", function () {
            if (!$(this).hasClass("active2")) {
                $(this).removeClass("active")
            }
        })
    };

    $(document).on("mouseenter", "#our-team .card", function () {
        $(this).find(".cardImage .image img").addClass("active3");
    })

    $(document).on("mouseleave", "#our-team .card", function () {
        $(this).find(".cardImage .image img").removeClass("active3");
    })

    //counter

    if ($("#ParallaxCounter").length) {
        $('.timer').countTo();
    }


    $(document).on("click", ".card-header", function(){
        $(this).parent().siblings().find(".card-body").slideUp();
        $(this).next().slideToggle();
       
    })

    if ($(window).scrollTop() > 100) {
        $(".nav-menu").css({
            "position": "fixed",
            "background-color": "white"
        })
    };

    new WOW().init();

    $(".parallax-image").parallax("50%", 0.5)
});
$(window).on("load", function () {
    $(".loader-image").fadeOut("slow");
});
