$(document).ready(function () {
    if (url.current.q.getBool("no-chrome")) {

        $('body div.navbar').hide();
        $('body div > div > h1').hide();
        $('body div.footer').hide();
        $('body').css('padding-top', '2em');

        //android browsers don't support background-attachment: fixed; yet. so disabling bg for now too.
        //https://code.google.com/p/android/issues/detail?id=3301
        if (navigator.isAndroid()) {
            $('body, html').css('background-image', 'none');
            $('body, html').css('background-color', 'none');
            $('body, html').css('background-color', 'transparent');
        }

    }
});

navigator.isAndroid = (function () {
    return navigator
        .userAgent
        .toLowerCase()
        .indexOf("android") > -1
    ;
});