var MOBILE_SIZE = 500;
var MIN_SIZE = 700;
var MID_SIZE = 1000;
var PROJECT_STAGGER = 25;

var MID_HEIGHT = 700;
var MID_TOP = -500;

function adjust() {
    if ($(window).width() <= MOBILE_SIZE) {
        $('#bio').css('font-size', '12px');
    } else {
        $('#bio').css('font-size', '16px');
    }

    if ($(window).width() <= MID_SIZE) {
        $('#bio-margin').addClass('col-1').removeClass('col-5');
        $('#bio').addClass('col-10').removeClass('col-5')
                 .addClass('mt-4').removeClass('mt-0');
        $('#name-margin').addClass('col-1').removeClass('col-2');
        $('#name').addClass('col-10').removeClass('col-3')
                  .addClass('mr-0').removeClass('mr-5')
                  .addClass('text-center').removeClass('text-right');
        $('.link').addClass('col-2').removeClass('col-1');
    } else {
        $('#bio-margin').addClass('col-5').removeClass('col-1');
        $('#bio').addClass('col-4').removeClass('col-10')
                 .addClass('mt-0').removeClass('mt-4');
        $('#name-margin').addClass('col-2').removeClass('col-1');
        $('#name').addClass('col-3').removeClass('col-10')
                  .addClass('mr-5').removeClass('mr-0')
                  .addClass('text-right').removeClass('text-center');
        $('.link').addClass('col-1').removeClass('col-2');
    }

    adjust_projects();
}

function adjust_projects() {
    if ($(window).width() <= MIN_SIZE) {
        $('.project').each(function(index) {
            $(this).addClass('col-12').removeClass('col-4').removeClass('col-6');
            $(this).css('margin-top', '0px');
        });
    } else if ($(window).width() <= MID_SIZE) {
        $('.project').each(function(index) {
            $(this).addClass('col-6').removeClass('col-4').removeClass('col-12');
            $(this).css('margin-top', `${index % 2 * PROJECT_STAGGER}px`);
        });
    } else {
        $('.project').each(function(index) {
            $(this).addClass('col-4').removeClass('col-6').removeClass('col-12');
            $(this).css('margin-top', `${index % 3 * PROJECT_STAGGER}px`);
        });
    }
}

function adjust_background() {
    var heightDiff = MID_HEIGHT - $(window).height();
    var newTop = MID_TOP - heightDiff / 3;
    $('#background').css('top', `${newTop}px`);
}

$(document).ready(function() {
    adjust();
    $(window).resize(function() {
        adjust();
    });

    $('#arrow-click').click(function() {
        $('html, body').animate({
          scrollTop: $('#portfolio-main').offset().top - 50
        }, 500);
    });
});


function rotateCard(container){
    if(container.classList.contains('flipped')){
        container.classList.remove('flipped');
    } else {
        container.classList.add('flipped');
    }
}