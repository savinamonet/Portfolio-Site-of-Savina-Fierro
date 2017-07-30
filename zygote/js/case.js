  $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.circle').addClass("bounceIn");
            } else {
                $('.circle').removeClass("bounceIn");
            }
        });
