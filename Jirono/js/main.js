
$(function(){
    $(window).on("load", function () {
        $(".loader-image").fadeOut("hide");
      });

    $(document).on("scroll",window,function(){
        if($(window).scrollTop() > 100){
           $(".nav-menu").css({
            "position": "fixed",
            "background-color": "white",
            "height": "80px"
            
           });
           $("#up").css({
               "background":"linear-gradient(135deg, #1A153A 0%, #565178 100%)"
           })
           $(".nav-menu-others").css({
            "position": "fixed"
           })
        }else{
            $(".nav-menu").css({
                "position": "absolute",
                "background-color": "transparent",
                "height": "100px"
               });
            $("#up").css({
                   "background":"#1A153A"
            });
            $(".nav-menu-others").css({
                "position": "fixed"
            })
        }
    });

    if($("#design a.designList").length!=0){
        $(document).on("mouseenter", "#design a.designList", function(){

            
            if(!$(this).hasClass("active2")){
                $(this).addClass("active")
            }
        })
        $(document).on("mouseleave", "#design a.designList", function(){
            if(!$(this).hasClass("active2")){
            $(this).removeClass("active")
            }
        })
    };
    if($("#features a.designList").length!=0){
        $(document).on("mouseenter", "#features a.designList", function(){

            
            if(!$(this).hasClass("active2")){
                $(this).addClass("active")
            }
        })
        $(document).on("mouseleave", "#features a.designList", function(){
            if(!$(this).hasClass("active2")){
            $(this).removeClass("active")
            }
        })
    };

   
   //counter

    if($("#countTo").length){
        $('.timer').countTo();
    }

    if($(window).scrollTop() >100){
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
