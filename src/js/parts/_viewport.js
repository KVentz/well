


/**
 *  set adaptive viewport on screens smaller then 640 and bigger than 1200
 *  set static viewport on screens between 641px and 1199
 */

var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1279px)');
var mediaCheckDesktop = window.matchMedia('(min-width: 1280px)');

$(window).on('load resize', function () {
    var viewport = document.getElementById('viewport');

    if (mediaCheckMobile.matches) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    } else if (mediaCheckTablet.matches) {
        viewport.setAttribute('content', 'width=device-width');
    } else if (mediaCheckDesktop.matches) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
});