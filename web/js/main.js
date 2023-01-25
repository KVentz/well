


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

$(window).on('load resize', function () {

    if (mediaCheckMobile.matches) {
        console.log('mobile');
    } else if (mediaCheckTablet.matches) {
        console.log('tablet');
    } else if (mediaCheckDesktop.matches) {
        console.log('desktop');
    }
});
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
var fullpageInit = false;

function fullpageSettings() {

    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'contact'],
        css3: true,
        navigation: true,
        navigationPosition: 'right',

        afterLoad: function() {
            fullpageInit = true;
        },
        afterLoad: function(anchorLink, index) {
            if (anchorLink == 'home' && index == 1) {
                $('.gs_animate').addClass('visible animated fadeInUp-later');
                $('.gb_animate').addClass('visible animated fadeInUp');
            }
            // else {
            //     $('.gs_animate').removeClass('visible animated fadeInUp-later');
            //     $('.gb_animate').removeClass('visible animated fadeInUp');
            // }
            if (anchorLink == 'about' && index == 2) {
                $('.gl_animate').addClass('visible animated fadeInLeft');
                $('.gr_animate').addClass('visible animated fadeInRight');
            }
            else {
                $('.gl_animate').removeClass('visible animated fadeInLeft');
                $('.gr_animate').removeClass('visible animated fadeInRight');
            }
            if (anchorLink == 'contact' && index == 3) {
                $('.gf_animate').addClass('visible animated fadeInLeft');
            }
            else {
                $('.gf_animate').removeClass('visible animated fadeInLeft');
            }
        }

    });
}

if ( $('.page-container').hasClass('page-main') ) {

    $(window).on('load resize', function () {

        if (mediaCheckDesktop.matches) {

            if (!fullpageInit) {
                fullpageSettings();
                $.fn.fullpage.reBuild();
            }
        } else if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {

            $('.form').removeClass('gf_animate');
            $('.img_girls').removeClass('gr_animate');
            $('.container_text').removeClass('gl_animate');
            $('.main_logo').removeClass('gs_animate');

            if (fullpageInit) {
                fullpageInit = false;
                $.fn.fullpage.destroy('all');

            }

        }
    });

}
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stopped');
        $('.menu_opener').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stopped');
        $('.menu_opener').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });

    $('.menu_wrapper').on('click', function() {
        hamburgerClose();
    });


})(jQuery);
// $(document).ready(function(){
//     if($('.gb_animate').length) {
//         $('.gb_animate').viewportChecker({
//             classToAdd: 'visible animated fadeInUp',
//             offset: 250
//         });
//         // $('.gs_animate').viewportChecker({
//         //     classToAdd: 'visible animated fadeInUp-later',
//         //     offset: 250
//         // });
//     }
// });