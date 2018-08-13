jQuery(document).ready(function($) {
    $(window).resize(function() {
        adjustCardWidth();
    });

    function adjustCardWidth() {
        if ($(window).width() <= 900) {
            $(".horizontal").css("display", "none");
            $(".vertical").css("display", "flex");
        } else {
            $(".horizontal").css("display", "flex");
            $(".vertical").css("display", "none");
        }
    }
    adjustCardWidth();
})
