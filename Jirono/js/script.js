
$(function(){
    $(window).on("load", function () {
        $(".loader-image").fadeOut("hide");
      });

    $(document).on("scroll",window,function(){
        if($(window).scrollTop() > 100){
           $(".nav-menu").css({
            "position": "fixed",
            "background-color": "white"
           })
        }else{
            $("#nav-menu").css({
                "position": "absolute",
                "background-color": "transparent"
               })
        }
    })

    if($(window).scrollTop() >100){
        $(".nav-menu").css({
            "position": "fixed",
            "background-color": "white"
        })
    };

    new WOW().init();
});
$(window).on("load", function () {
    $(".loader-image").fadeOut("slow");
  });
