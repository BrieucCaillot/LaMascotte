$(document).ready(function() {
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