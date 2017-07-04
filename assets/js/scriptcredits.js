jQuery(document).ready(function($) {

	// LOGO LA MASCOTTE POSITION FIXED ON SCROLL
		$(this).on('scroll', function(){
			console.log($(window).scrollTop());
			if ( $(this).width() > 992 && $(this).scrollTop() > 500){
				$("main section:last-child img").css({
					'position': 'fixed',
					'top': '-8%',
					'left': '-6.8%',
					'width': '19.7%'
				});
			} else {
				$("main section:last-child img").css({
					'position': '',
					'top': '',
					'left': '',
					'width': ''
				});
			}
		});

});