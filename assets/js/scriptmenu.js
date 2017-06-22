jQuery(document).ready(function($) {

	// SCROLLS
		// SCROLL TO MENUS
		$("#menusvgnav").click(function() {
	      $('html,body').animate({
	          scrollTop: $("main section:nth-child(3)").offset().top},
	          'slow');
	    });

	    // SCROLL TO ENTRÉES
		$("#entreesvgnav").click(function() {
	      $('html,body').animate({
	          scrollTop: $("main section:nth-child(4)").offset().top},
	          'slow');
	    });

	    // SCROLL TO PLATS
		$("#platsvgnav").click(function() {
	      $('html,body').animate({
	          scrollTop: $("main section:nth-child(5)").offset().top},
	          'slow');
	    });

	    // SCROLL TO DESSERTS
		$("#dessertsvgnav").click(function() {
	      $('html,body').animate({
	          scrollTop: $("main section:nth-child(6)").offset().top},
	          'slow');
	    });

	    // SCROLL TO BOISSONS
		$("#drinksvgnav").click(function() {
	      $('html,body').animate({
	          scrollTop: $("main section:nth-child(7)").offset().top},
	          'slow');
	    });
	
	// LES MENUS 
		// DISPLAY NONE ALL
		$("#menusvg").click(function() {
			$("#entree1, #plat1, #dessert1, #entree2, #plat2, #dessert2, #plat3, #dessert3").fadeOut();
			$(".arrowsvg").attr('src', '../static/images/menu/arrowdown2.svg');
		});
		/* MENU MASCOTTE */
			$("#menu1 h2").click(function(){
				$("#entree1, #plat1, #dessert1").fadeToggle();
				if ($("#menu1 img.arrowsvg").hasClass('closed')) {
					$("#menu1 img.arrowsvg").removeClass('closed').addClass('opened');
					$("#menu1 img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#menu1 img.arrowsvg").hasClass('opened')) {
					$("#menu1 img.arrowsvg").removeClass('opened').addClass('closed');
					$("#menu1 img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});
		/* MENU COCOTTE */
			$("#menu2 h2").click(function(){
				$("#entree2, #plat2, #dessert2").fadeToggle();
				if ($("#menu2 img.arrowsvg").hasClass('closed')) {
					$("#menu2 img.arrowsvg").removeClass('closed').addClass('opened');
					$("#menu2 img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#menu2 img.arrowsvg").hasClass('opened')) {
					$("#menu2 img.arrowsvg").removeClass('opened').addClass('closed');
					$("#menu2 img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});
		/* MENU MARMOTTE */
			$("#menu3 h2").click(function(){
				$("#plat3, #dessert3").fadeToggle();
				if ($("#menu3 img.arrowsvg").hasClass('closed')) {
					$("#menu3 img.arrowsvg").removeClass('closed').addClass('opened');
					$("#menu3 img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#menu3 img.arrowsvg").hasClass('opened')) {
					$("#menu3 img.arrowsvg").removeClass('opened').addClass('closed');
					$("#menu3 img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});

	// LES ENTRÉES
		//DISPLAY NONE ALL
	 	$("#entreesvg").click(function(){
			$("#entreecold ul, #entreehot ul").fadeOut();
		});
		// ENTREEFROIDE
		$("#entreecold h2").click(function(){
			$("#entreecold ul").fadeToggle();
			if ($("#entreecold img.arrowsvg").hasClass('closed')) {
				$("#entreecold img.arrowsvg").removeClass('closed').addClass('opened');
				$("#entreecold img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
			} else if ($("#entreecold img.arrowsvg").hasClass('opened')) {
				$("#entreecold img.arrowsvg").removeClass('opened').addClass('closed');
				$("#entreecold img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
			}
		});	
		// ENTREECHAUDE
		$("#entreehot h2").click(function(){
			$("#entreehot ul").fadeToggle();
			if ($("#entreehot img.arrowsvg").hasClass('closed')) {
				$("#entreehot img.arrowsvg").removeClass('closed').addClass('opened');
				$("#entreehot img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
			} else if ($("#entreehot img.arrowsvg").hasClass('opened')) {
				$("#entreehot img.arrowsvg").removeClass('opened').addClass('closed');
				$("#entreehot img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
			}
		});	

	// LES PLATS
		//DISPLAY NONE ALL
	 	$("#platsvg").click(function(){
			$("#compo1display, #compo2display, #compo3display, #compo4display, #compo5display, #compo6display ,#fdmdisplay h5, #fdmdisplay p, #pdm h5, #pdmdisplay p, #huitresdisplay, #crustacesdisplay, #poissonsdemerdisplay, #homardsdisplay, #epiceriedisplay, #meatdisplay").fadeOut();
		}); 	
		// LES FRUITS DE MER
			$("#fdm h4").click(function(){
				$("#fdmdisplay h5").fadeToggle();
				$("#pdm h5").fadeToggle();
				$("#fdmdisplay p").fadeOut();
				$("#pdmdisplay p").fadeOut();
				$("#compo1display, #compo2display, #compo3display, #compo4display, #compo5display, #compo6display, #huitresdisplay, #crustacesdisplay, #poissonsdemerdisplay, #homardsdisplay, #epiceriedisplay").fadeOut();
				if ($("#fdm img.arrowsvg").hasClass('closed')) {
					$("#fdm img.arrowsvg").removeClass('closed').addClass('opened');
					$("#fdm img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#fdm img.arrowsvg").hasClass('opened')) {
					$("#fdm img.arrowsvg").removeClass('opened').addClass('closed');
					$("#fdm img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});
			// LES COMPOSITIONS
				// DISPLAY NONE
				$("#fdmdisplay h5").click(function() {
					$("#fdmdisplay p").fadeToggle();
					$("#compo1display, #compo2display, #compo3display, #compo4display, #compo5display, #compo6display").fadeOut();
					if ($("#fdmdisplay img.arrowsvgplats").hasClass('closed')) {
						$("#fdmdisplay img.arrowsvgplats").removeClass('closed').addClass('opened');
						$("#fdmdisplay img.arrowsvgplats").attr('src', '../static/images/menu/arrowup2.svg');
					} else if ($("#fdmdisplay img.arrowsvgplats").hasClass('opened')) {
						$("#fdmdisplay img.arrowsvgplats").removeClass('opened').addClass('closed');
						$("#fdmdisplay img.arrowsvgplats").attr('src', '../static/images/menu/arrowdown2.svg');
					}
				});
				// COMPO 1
				$("#compo1").click(function(){
					$("#compo1display").fadeToggle();
				});
				// COMPO 2
				$("#compo2").click(function(){
					$("#compo2display").fadeToggle();
				});
				// COMPO 3
				$("#compo3").click(function(){
					$("#compo3display").fadeToggle();
				});
				// COMPO 4
				$("#compo4").click(function(){
					$("#compo4display").fadeToggle();
				});
				// COMPO 5
				$("#compo5").click(function(){
					$("#compo5display").fadeToggle();
				});
				// COMPO 6
				$("#compo6").click(function(){
					$("#compo6display").fadeToggle();
				});
			// POISSONS ET FRUITS DE MER
				// DISPLAY NONE
				$("#pdm h5").click(function() {
					$("#pdmdisplay p").fadeToggle();
					$("#huitresdisplay, #crustacesdisplay, #poissonsdemerdisplay, #homardsdisplay, #epiceriedisplay").fadeOut();
					if ($("#pdm img.arrowsvgplats").hasClass('closed')) {
						$("#pdm img.arrowsvgplats").removeClass('closed').addClass('opened');
						$("#pdm img.arrowsvgplats").attr('src', '../static/images/menu/arrowup2.svg');
					} else if ($("#pdm img.arrowsvgplats").hasClass('opened')) {
						$("#pdm img.arrowsvgplats").removeClass('opened').addClass('closed');
						$("#pdm img.arrowsvgplats").attr('src', '../static/images/menu/arrowdown2.svg');
					}
				});
				// HUITRES
				$("#huitres").click(function(){
					$("#huitresdisplay").fadeToggle();
				});
				// CRUSTACÉS ET COQUILLAGES
				$("#crustaces").click(function(){
					$("#crustacesdisplay").fadeToggle();
				});
				// POISSONS DE MER
				$("#poissonsdemer").click(function(){
					$("#poissonsdemerdisplay").fadeToggle();
				});
				// HOMARDS
				$("#homards").click(function(){
					$("#homardsdisplay").fadeToggle();
				});
				// HOMARDS
				$("#epicerie").click(function(){
					$("#epiceriedisplay").fadeToggle();
				});
			
		// LES VIANDES
			$("#meat h4").click(function(){
				$("#meatdisplay").fadeToggle();
			});

	// LES DESSERTS
		//DISPLAY NONE ALL
	 	$("#dessertsvg").click(function(){
			$("#homemade ul, #icecream ul").fadeOut();
		});
		// FAITS MAISON
			$("#homemade").click(function(){
				$("#homemade ul").fadeToggle();
				if ($("#homemade img.arrowsvg").hasClass('closed')) {
					$("#homemade img.arrowsvg").removeClass('closed').addClass('opened');
					$("#homemade img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#homemade img.arrowsvg").hasClass('opened')) {
					$("#homemade img.arrowsvg").removeClass('opened').addClass('closed');
					$("#homemade img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});
		// GLACES ET SORBETS BERTHILLON
			$("#icecream").click(function(){
				$("#icecream ul").fadeToggle();
				if ($("#icecream img.arrowsvg").hasClass('closed')) {
					$("#icecream img.arrowsvg").removeClass('closed').addClass('opened');
					$("#icecream img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#icecream img.arrowsvg").hasClass('opened')) {
					$("#icecream img.arrowsvg").removeClass('opened').addClass('closed');
					$("#icecream img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});

	// LES BOISSONS
		//DISPLAY NONE ALL
	 	$("#drinksvg").click(function(){
			$("#drink1 ul, #drink2 ul, #drink3 ul, #drink4 ul").fadeOut();
		});
		// À DÉCOUVRIR
			$("#drink1").click(function(){
				$("#drink1 ul").fadeToggle();
				if ($("#drink1 img.arrowsvg").hasClass('closed')) {
					$("#drink1 img.arrowsvg").removeClass('closed').addClass('opened');
					$("#drink1 img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#drink1 img.arrowsvg").hasClass('opened')) {
					$("#drink1 img.arrowsvg").removeClass('opened').addClass('closed');
					$("#drink1 img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});
		// CHAMPAGNE
			$("#drink2").click(function(){
				$("#drink2 ul").fadeToggle();
				if ($("#drink2 img.arrowsvg").hasClass('closed')) {
					$("#drink2 img.arrowsvg").removeClass('closed').addClass('opened');
					$("#drink2 img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#drink2 img.arrowsvg").hasClass('opened')) {
					$("#drink2 img.arrowsvg").removeClass('opened').addClass('closed');
					$("#drink2 img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});
		// KIRS
			$("#drink3").click(function(){
				$("#drink3 ul").fadeToggle();
				if ($("#drink3 img.arrowsvg").hasClass('closed')) {
					$("#drink3 img.arrowsvg").removeClass('closed').addClass('opened');
					$("#drink3 img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#drink3 img.arrowsvg").hasClass('opened')) {
					$("#drink3 img.arrowsvg").removeClass('opened').addClass('closed');
					$("#drink3 img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});
		// COCKTAILS
			$("#drink4").click(function(){
				$("#drink4 ul").fadeToggle();
				if ($("#drink4 img.arrowsvg").hasClass('closed')) {
					$("#drink4 img.arrowsvg").removeClass('closed').addClass('opened');
					$("#drink4 img.arrowsvg").attr('src', '../static/images/menu/arrowup.svg');
				} else if ($("#drink4 img.arrowsvg").hasClass('opened')) {
					$("#drink4 img.arrowsvg").removeClass('opened').addClass('closed');
					$("#drink4 img.arrowsvg").attr('src', '../static/images/menu/arrowdown.svg');
				}
			});

});