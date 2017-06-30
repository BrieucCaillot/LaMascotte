jQuery(document).ready(function($) {

	// SCROLLS
		// SCROLL TO MENUS
		    $("#menunavclickable").click(function() {
		      	$('html,body').animate({
		          	scrollTop: $("main section:nth-child(3)").offset().top},
		          	'slow');
		    });

	    // SCROLL TO ENTRÉES
		    $("#cartenavclickable").click(function() {
		      	$('html,body').animate({
		          	scrollTop: $("main section:nth-child(4)").offset().top},
		          	'slow');
		    });

	    // SCROLL TO PLATS
		    $("#platsnavclickable").click(function() {
		      	$('html,body').animate({
		          	scrollTop: $("main section:nth-child(5)").offset().top},
		          	'slow');
		    });

	    // SCROLL TO DESSERTS
		    $("#dessertsnavclickable").click(function() {
		      	$('html,body').animate({
		          	scrollTop: $("main section:nth-child(6)").offset().top},
		          	'slow');
		    });

	    // SCROLL TO BOISSONS
		    $("#drinksnavclickable").click(function() {
		      	$('html,body').animate({
		          	scrollTop: $("main section:nth-child(7)").offset().top},
		          	'slow');
		    });
	
	// LES MENUS 
		// DISPLAY NONE ALL
		$("main section:nth-child(3) h4").click(function() {
			$("#entree1, #plat1, #dessert1, #entree2, #plat2, #dessert2, #plat3, #dessert3, #aboutmascotte, #aboutcocotte, #aboutmarmotte").fadeOut();
			$('#menu1 h2, #menu2 h2, #menu3 h2').removeClass('opened').addClass('closed');
		});

		/* MENU MASCOTTE */
			$("#menu1 h2").click(function(){
				$("#entree1, #plat1, #dessert1, #aboutmascotte").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});
		/* MENU COCOTTE */
			$("#menu2 h2").click(function(){
				$("#entree2, #plat2, #dessert2, #aboutcocotte").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});
		/* MENU MARMOTTE */
			$("#menu3 h2").click(function(){
				$("#plat3, #dessert3, #aboutmarmotte").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});

	// LES ENTRÉES
		//DISPLAY NONE ALL
	 	$("main section:nth-child(4) h4").click(function(){
			$("#entreecold ul, #entreehot ul").fadeOut();
			$('#entreehot h2, #entreecold h2').removeClass('opened').addClass('closed');
		});
		// ENTREEFROIDE
		$("#entreecold h2").click(function(){
			$("#entreecold ul").fadeToggle();
			if ($(this).hasClass('closed')) {
				$(this).removeClass('closed').addClass('opened');
			} else if ($(this).hasClass('opened')) {
				$(this).removeClass('opened').addClass('closed');
			}
		});	
		// ENTREECHAUDE
		$("#entreehot h2").click(function(){
			$("#entreehot ul").fadeToggle();
			if ($(this).hasClass('closed')) {
				$(this).removeClass('closed').addClass('opened');
			} else if ($(this).hasClass('opened')) {
				$(this).removeClass('opened').addClass('closed');
			}
		});	

	// LES PLATS
		//DISPLAY NONE ALL
	 	$("main section:nth-child(5) h4.menudevice").click(function(){
			$("#compo1display, #compo2display, #compo3display, #compo4display, #compo5display, #compo6display ,#fdmdisplay h5, #fdmdisplay p, #pdm h5, #pdmdisplay p, #huitresdisplay, #crustacesdisplay, #poissonsdemerdisplay, #homardsdisplay, #epiceriedisplay, #meatdisplay").fadeOut();
			$("#fdm h4, #fdmdisplay h5, #pdm h5, #meat h4").removeClass('opened').addClass('closed');
		}); 	
		// LES FRUITS DE MER
			$("#fdm h4").click(function(){
				$("#fdmdisplay h5, #pdm h5").fadeToggle();
				$("#fdmdisplay h5, #pdm h5").removeClass('opened').addClass('closed');
				$("#fdmdisplay p, #pdmdisplay p, #compo1display, #compo2display, #compo3display, #compo4display, #compo5display, #compo6display, #huitresdisplay, #crustacesdisplay, #poissonsdemerdisplay, #homardsdisplay, #epiceriedisplay").fadeOut();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});
			// LES COMPOSITIONS
				// DISPLAY NONE
				$("#fdmdisplay h5").click(function() {
					$("#fdmdisplay p").fadeToggle();
					$("#compo1display, #compo2display, #compo3display, #compo4display, #compo5display, #compo6display").fadeOut();
					if ($(this).hasClass('closed')) {
						$(this).removeClass('closed').addClass('opened');
					} else if ($(this).hasClass('opened')) {
						$(this).removeClass('opened').addClass('closed');
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
					if ($(this).hasClass('closed')) {
						$(this).removeClass('closed').addClass('opened');
					} else if ($(this).hasClass('opened')) {
						$(this).removeClass('opened').addClass('closed');
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
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});

	// LES DESSERTS
		//DISPLAY NONE ALL
	 	$("main section:nth-child(6) h4").click(function(){
			$("#homemade ul, #icecream ul").fadeOut();
			$("#homemade h2, #icecream h2").removeClass('opened').addClass('closed');
		});
		// FAITS MAISON
			$("#homemade h2").click(function(){
				$("#homemade ul").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});
		// GLACES ET SORBETS BERTHILLON
			$("#icecream h2").click(function(){
				$("#icecream ul").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});

	// LES BOISSONS
		//DISPLAY NONE ALL
	 	$("main section:last-child h4.menudevice").click(function(){
			$("#drink1 ul, #drink2 ul, #drink3 ul, #drink4 ul").fadeOut();
			$("#drink1 h4, #drink2 h4, #drink3 h4, #drink4 h4").removeClass('opened').addClass('closed');
		});
		// À DÉCOUVRIR
			$("#drink1 h4").click(function(){
				$("#drink1 ul").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});
		// CHAMPAGNE
			$("#drink2 h4").click(function(){
				$("#drink2 ul").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});
		// KIRS
			$("#drink3 h4").click(function(){
				$("#drink3 ul").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});
		// COCKTAILS
			$("#drink4 h4").click(function(){
				$("#drink4 ul").fadeToggle();
				if ($(this).hasClass('closed')) {
					$(this).removeClass('closed').addClass('opened');
				} else if ($(this).hasClass('opened')) {
					$(this).removeClass('opened').addClass('closed');
				}
			});

});