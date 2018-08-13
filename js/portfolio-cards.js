jQuery(document).ready(function($) {
    $(window).resize(function() {
        adjustCardWidth();
    });

    function adjustCardWidth() {
        if ($(window).width() < 768) {
            $(".horizonal").removeClass("horizontal flex-md-row").addClass("vertical");
            $(".horizontal_img").css("display", "none");
            $(".vertical_img").css("display", "block");
            $(".card-body").addClass("col");
        } else {
            $(".vertical").addClass("horizontal flex-md-row").removeClass("vertical");
            $(".vertical_img").css("display", "none");
            $(".horizontal_img").css("display", "block");
            $(".card-body").removeClass("col");
        }
    }
    adjustCardWidth();
})
