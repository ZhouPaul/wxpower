$(function () {
    $(document).scroll(function () {
        var result = $(window).width();
        if (result < 800) {
            if ($(this).scrollTop() >= 160) {
                $('.page-tabs').css({
                    "position": 'fixed',
                    'top': 30
                })
            }else {
                $('.page-tabs').css({
                    "position": 'static'
                })
            }
        }else {
            if ($(this).scrollTop() >= 260) {
                $('.page-tabs').css({
                    "position": 'fixed',
                    'top': 31.5
                })
            }else {
                $('.page-tabs').css({
                    "position": 'static'
                })
            }
        }
    })
});