var fullpageInit = false;

function fullpageSettings() {

    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'service', 'contact'],
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

            if (anchorLink == 'service' && index == 3) {
                $('.gc_animate').addClass('visible animated fadeInLeft');
                $('.ge_animate').addClass('visible animated fadeInRight');
            }
            else {
                $('.gc_animate').removeClass('visible animated fadeInLeft');
                $('.ge_animate').removeClass('visible animated fadeInRight');
            }

            if (anchorLink == 'contact' && index == 4) {
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
                fullpageInit = true;
                fullpageSettings();
                $.fn.fullpage.reBuild('all');
            }

        } else if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {

            console.log('tutu');

            if (fullpageInit) {
                fullpageInit = false;
                $.fn.fullpage.destroy('all');
            }

            $('.form').removeClass('gf_animate');
            $('.img_girls').removeClass('gr_animate');
            $('.img_girls').removeClass('gc_animate');
            $('.container_text').removeClass('gl_animate');
            $('.container_text').removeClass('ge_animate');
            $('.main_logo').removeClass('gs_animate');

                if($('.mob_animate').length) {
        $('.main_animate').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 50
        });
        $('.text_animate').viewportChecker({
            classToAdd: 'visible animated fadeInUp-later-unpo',
            offset: 200
        });
    }

        }
    });

}