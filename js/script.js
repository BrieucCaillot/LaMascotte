$(document).ready(function() {

/* FIXED MENU */

    $(document).on("scroll", function() {

        if ($(document).scrollTop()>100) {
            $("header").css({
                "position": "fixed",
                "z-index": "200",
                "background-color": "rgb(107, 151, 172)",
                "min-height" : "70px"
            });

            $("header nav").css({
                "padding": '0',
                "margin-top": "5px"
            });

            $("#logo img").css({
                "width": "125px",
                "position": 'absolute',
                "top": "14%",
                "left": "6%"
            });
            
        } else {
            $("header").css({
                "position": " ",
                "z-index": "",
                "background-color": "rgba(0, 0, 0, 0)",
                "min-height" : "106px"
            });

            $("header nav").css({
                "padding": '20px 0',
            });

            $("#logo img").css({
                "width": "",
                "position": '',
                "top": "",
                "left": ""
            });
        }
    }); 

});