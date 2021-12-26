
$(document).ready(function(){

    $(document).scroll(function(){

        var sTop = $(this).scrollTop();

        if (sTop > 500) {
            $("#to_top").css("display", "inline");
        }
        else {
            $("#to_top").css("display", "none");
        }
       
    })

    $("#to_top").click(function(){

        $("html").animate({scrollTop: 0}, 100)
    })
});