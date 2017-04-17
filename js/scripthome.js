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
                "position": "",
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

/* HOVER MENU */

	$(".hovermenu1").hover(function(){

    	if ($('.hovermenu1').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu1').addClass('menuhover');
    	}
	});

	$(".hovermenu2").hover(function(){

    	if ($('.hovermenu2').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu2').addClass('menuhover');
    	}
	});

	$(".hovermenu3").hover(function(){

    	if ($('.hovermenu3').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu3').addClass('menuhover');
    	}
	});

	$(".hovermenu4").hover(function(){

    	if ($('.hovermenu4').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu4').addClass('menuhover');
    	}
	});

});