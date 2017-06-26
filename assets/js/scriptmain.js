$(document).ready(function() {

    //SCROLL TO CONTACT DIV
        $("#contacter").click(function() {
          $('html,body').animate({
              scrollTop: $("#contact").offset().top},
              'slow');
        });

        /* SWIPER */
        var galleryTop = new Swiper('.gallery-top', {
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           spaceBetween: 10,
           keyboardControl: true
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
           spaceBetween: 10,
           centeredSlides: true,
           slidesPerView: 'auto',
           touchRatio: 0.2,
           slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;

        var sliders = document.querySelectorAll('.swiper-slide');
        for (var i = 0; i < sliders.length; ++i) {
           sliders[i].addEventListener('click', function(event) {
              event.target.parentNode.parentNode.parentNode.classList.add('fullscreen');
              setTimeout(function() {
                 galleryTop.update();
                 galleryThumbs.update();
              }, 200);
           }, false);
        }

        var closeButtons = document.querySelectorAll('.close-button');
        for (var y = 0; y < closeButtons.length; ++y) {
           closeButtons[y].addEventListener('click', function(event) {
              console.log(event);
              var fullScreenElements = document.querySelectorAll('.fullscreen');
              console.log(fullScreenElements);
              for (var x = 0; x < fullScreenElements.length; ++x) {
                 fullScreenElements[x].classList.remove('fullscreen');
                 setTimeout(function() {
                    galleryTop.update();
                    galleryThumbs.update();
                 }, 200);
              }
           });
        }

    // HOVER MENU
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