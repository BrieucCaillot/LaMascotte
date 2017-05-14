$(document).ready(function() {

    /* FIXED MENU */
    $(document).on("scroll", function() {

        if ($(document).scrollTop()>80) {

            $("header").css({
                "z-index": "200",
                "min-height": "60px",
                "background-color": "rgb(107, 151, 127)",
                "border-bottom": "3px solid #e0d2b1"
            });

            $("header nav").css({
                "padding": "19px 0px 0px 0px"
            });

            $("#logo img").css({
                "width": "145px",
            });

            $("header #logo").css({
                "padding": "10px 0 0 0",
            });

            $("header #headersocial").css({
                "padding": '20px 0',
            });
            
        } else {
            $("header").css({
                "position": "",
                "z-index": "",
                "color": "",
                "background-color": "",
                "border-bottom": "",
                "min-height": ""
            });

            $("header nav").css({
                "padding": '',
            });

            $("#logo img").css({
                "width": "",
                "position": '',
                "top": "",
                "left": ""
            });

            $("header #logo").css({
                "padding": ""
            });

            $("header #headersocial").css({
                "padding": '',
            });
        }
    });
});
