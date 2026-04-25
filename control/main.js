$(".dark-btn").click(function(){
  $(".box").toggleClass("dark");
  $(".container").toggleClass("dark")
});

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
    
);

$(".reveal-btn").click(
    function(){
        $(".chair").addClass("show");
        // $(".reveal-btn").css("display", "none")
        $(".reveal-btn").hide();
         $(".ready-btn").css("opacity","1");

    }
    
);

$(".draggable").draggable({
    // containment: ".container",
    scroll: false
});

$(".ready-btn").click(
    function(){
        $(".chair").addClass("hide");
         $(".chair").css("display", "none")
        $(".chair").hide("hide");
        $(".fullcar").css("opacity","1");
        $(".toolbox").hide("hide")
        $(".ready-btn").hide();;
        $(".go-btn").css("opacity","1");
       
    });
    
    $(".go-btn").click(
    function(){
        $(".fullcar").addClass("go");
         $(".blackoutline").css("opacity", "0")
        $(".fullcar").toggleClass("go")
        $(".go-btn").hide("hide");
       
      
    }
    
);