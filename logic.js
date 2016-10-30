/**
 * Created by sophia on 10/18/16.
 */
$(function () {
    var width = 0;
    $('.portfolioScroll .gridSection .gridTest').each(function () {
        width += $(this).outerWidth(true);
    });
    $('.portfolioScroll .gridSection').css('width', width + "px");
});


function changePage(page) {
    var currentPage = $('.active-page');
    if ('#' + currentPage.attr('id') == page) {
        return 0;
    } else {
        currentPage.fadeOut(1000);
        currentPage.removeClass('active-page');
        $(page).fadeIn(1000);
        $(page).addClass('active-page');
    }
}


$(document).ready(function () {
    $('.page').not('.active-page').hide();

    $('.target').click(function () {
        $('.target').removeClass('active-');
        $(this).addClass('active-');
        switch ($(this).attr('id')) {
            case 'homeBtn':
                changePage('#home-page');
                break;
            case 'aboutBtn':
                changePage('#about-page');
                break;
            case 'portfolioBtn':
                changePage('#portfolio-page');
                break;
            case 'contactBtn':
                changePage('#contact-page');
                break;
        }
    });

    var position = $('.portfolioScroll').scrollLeft();

    $('#leftArrow').on('click', function () {
        if (position > 0) {
            $('.portfolioScroll').scrollLeft(position -= 300);
        }
    });

    $('#rightArrow').on('click', function () {
        if (position < 1510) {
            $('.portfolioScroll').scrollLeft(position += 300);
        }
    });
});