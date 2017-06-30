$(document).ready(function() {

    // FIXED MENU 
    // call headerfixed function on load
    $(function(){
        headerfixed();
        $(window).scroll(headerfixed);
    });

    // header fixed function
    function headerfixed () {
        if ($(window).scrollTop()>80 && $(window).width() > 414) {

            $("header").css({
                "z-index": "200",
                "min-height": "60px",
                "background-color": "rgb(107, 151, 127)",
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

        } else if($(window).width() <= 414) {

            $("header").css({
                "z-index": "200",
                "min-height": "40px",
                "background-color": "rgb(107, 151, 127)",
                // "background-color": "#556147"
            });

            $("header nav").css({
                "padding": "19px 0px 0px 0px"
            });

            $("#logo img").css({
                "width": "95px",
            });

            $("header #logo").css({
                "padding": "5px 0 0 0",
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
    }; 

    // PROGRESS BAR ON SCROLL
    function updateProgress(num1, num2){
        var percent = Math.ceil( num1 / num2 * 100 ) + '%';
        document.getElementById('progress').style.width = percent;
    }

    window.addEventListener('scroll', function(){
        var top = window.scrollY;
        var height = document.body.getBoundingClientRect().height - window.innerHeight;
        updateProgress(top, height);
    });

});
