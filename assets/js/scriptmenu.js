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
		});
		/* MENU MASCOTTE */
			$("#menu1 h2").click(function(){
				$("#entree1, #plat1, #dessert1").fadeToggle();
			});
		/* MENU COCOTTE */
			$("#menu2 h2").click(function(){
				$("#entree2, #plat2, #dessert2").fadeToggle();
			});
		/* MENU MARMOTTE */
			$("#menu3 h2").click(function(){
				$("#plat3, #dessert3").fadeToggle();
			});

	// LES ENTRÉES
		//DISPLAY NONE ALL
	 	$("#entreesvg").click(function(){
			$("#entreecold ul, #entreehot ul").fadeOut();
		});
		// ENTREEFROIDE
		$("#entreecold h2").click(function(){
			$("#entreecold ul").fadeToggle();
		});	
		// ENTREECHAUDE
		$("#entreehot h2").click(function(){
			$("#entreehot ul").fadeToggle();
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
			});
			// LES COMPOSITIONS
				// DISPLAY NONE
				$("#fdmdisplay h5").click(function() {
					$("#fdmdisplay p").fadeToggle();
					$("#compo1display, #compo2display, #compo3display, #compo4display, #compo5display, #compo6display").fadeOut();
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
			});
		// GLACES ET SORBETS BERTHILLON
			$("#icecream").click(function(){
				$("#icecream ul").fadeToggle();
			});

	// LES BOISSONS
		//DISPLAY NONE ALL
	 	$("#drinksvg").click(function(){
			$("#drink1 ul, #drink2 ul, #drink3 ul, #drink4 ul").fadeOut();
		});
		// À DÉCOUVRIR
			$("#drink1").click(function(){
				$("#drink1 ul").fadeToggle();
			});
		// CHAMPAGNE
			$("#drink2").click(function(){
				$("#drink2 ul").fadeToggle();
			});
		// KIRS
			$("#drink3").click(function(){
				$("#drink3 ul").fadeToggle();
			});
		// COCKTAILS
			$("#drink4").click(function(){
				$("#drink4 ul").fadeToggle();
			});

});