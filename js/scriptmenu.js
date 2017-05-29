jQuery(document).ready(function($) {
	
	// LES MENUS 
	$("#menusvg").click(function(){
			$("#menus h2, #menus p, #btn1down, #btn2down, #btn3down").fadeToggle(600);
			$("#entree1, #entree2, #plats1, #plats2, #plats3, #dessert1, #dessert2, #dessert3").fadeOut(600);
	});

		/* MENU MASCOTTE */
		$("#menu1 h2").click(function(){
			/*TOGGLE*/$("ul, li, #entree1, #plats1, #dessert1").show(600);
		});

		/* MENU COCOTTE */
		$("#menu2 h2").click(function(){
			/*TOGGLE*/$("ul, li, #entree2, #plats2, #dessert2").show(600);
		});

		/* MENU MARMOTTE */
		$("#menu3 h2").click(function(){
			/*TOGGLE*/$("ul, li, #plats3, #dessert3").show(600);
		});


		/* MENU MASCOTTE */
		$("#btn1down").click(function(){
			$(this).fadeOut(1000);
			console.log('inside');
			$("#entree1").show(1000);
			$("#plats1").show(1000);
			$("#dessert1").show(1000);
			$("#btn1up").show(1000);
		});

		$("#btn1up").click(function(){
			$(this).fadeOut(1000);
			console.log('inside');
			$("#entree1").fadeOut(1000);
			$("#plats1").fadeOut(1000);
			$("#dessert1").fadeOut(1000);
			$("#btn1down").show(1000);
		});

		/* MENU COCOTTE */
		$("#btn2down").click(function(){
			$(this).fadeOut(1000);
			console.log('inside');
			$("#entree2").show(1000);
			$("#plats2").show(1000);
			$("#dessert2").show(1000);
			$("#btn2up").show(1000);
		});

		$("#btn2up").click(function(){
			$(this).fadeOut(1000);
			console.log('inside');
			$("#entree2").fadeOut(1000);
			$("#plats2").fadeOut(1000);
			$("#dessert2").fadeOut(1000);
			$("#btn2down").show(1000);
		});

		/* MENU MARMOTTE */
		$("#btn3down").click(function(){
			$(this).fadeOut(1000);
			console.log('inside');
			$("#plats3").show(1000);
			$("#dessert3").show(1000);
			$("#btn3up").show(1000);
		});

		$("#btn3up").click(function(){
			$(this).fadeOut(1000);
			console.log('inside');
			$("#plats3").fadeOut(1000);
			$("#dessert3").fadeOut(1000);
			$("#btn3down").show(1000);
		});

/* LES ENTRÉES */

	$("#entreesvg").click(function(){
		console.log('mdr');
		$("#entreeid h2").fadeToggle(600);
		$("#entreecold ul, #entreehot ul").fadeOut(600);
	});	

	$("#entreecold h2").click(function(){
		console.log('mdr');
		$("#entreecold ul, #entreecold li").fadeToggle(600);
	});

	$("#entreehot h2").click(function(){
		console.log('mdr');
		$("#entreehot ul, #entreehot li").fadeToggle(600);
	});

/* LES PLATS */

	$("#platssvg").click(function(){
		$("#platsid h2").fadeToggle(600);
		$("#huitres h3, #compositions h3,#compo1, #compo2, #compo3, #compo4, #compo5, #compo6, p").fadeOut(600);
	});

		/* LES FRUITS DE MER */

		$("#platsid h2").click(function(){
			$("#compositions h3, #huitres h3").fadeToggle(400);
			$("#btn4down, #btn5down, #btn6down, #btn7down, #btn8down, #btn9down").fadeToggle(600);
			$("#btn4up, #btn5up, #btn6up, #btn7up, #btn8up, #btn9up, #compo1, #compo2, #compo3, #compo4, #compo5, #compo6, p").fadeOut(600);
		});

			/* COMPOSITIONS */

			$("#compositions h3").click(function(){
				$("#btn4down, #btn5down, #btn6down, #btn7down, #btn8down, #btn9down, #compositions p").show(600);
				$("#btn4up, #btn5up, #btn6up, #btn7up, #btn8up, #btn9up").fadeOut(600);
			});

			/* LE ROYAL MASCOTTE */
			$("#btn4down").click(function() {
				$(this).fadeOut(1000);
				$("#compo1").show(1000);
				$("#btn4up").show(1000);
			});
			$("#btn4up").click(function() {
				$(this).fadeOut(1000);
				$("#compo1").fadeOut(1000);
				$("#btn4down").show(1000);
			});

			/* LE PLATEAU MASCOTTE */
			$("#btn5down").click(function() {
				$(this).fadeOut(1000);
				$("#compo2").show(1000);
				$("#btn5up").show(1000);
			});
			$("#btn5up").click(function() {
				$(this).fadeOut(1000);
				$("#compo2").fadeOut(1000);
				$("#btn5down").show(1000);
			});

			/* L'ESCALLE DE LA MASCOTTE */
			$("#btn6down").click(function() {
				$(this).fadeOut(1000);
				$("#compo3").show(1000);
				$("#btn6up").show(1000);
			});
			$("#btn6up").click(function() {
				$(this).fadeOut(1000);
				$("#compo3").fadeOut(1000);
				$("#btn6down").show(1000);
			});

			/* A LA DECOUVERTE DE CRUS D'EXCEPTION */
			$("#btn7down").click(function() {
				$(this).fadeOut(1000);
				$("#compo4").show(1000);
				$("#btn7up").show(1000);
			});
			$("#btn7up").click(function() {
				$(this).fadeOut(1000);
				$("#compo4").fadeOut(1000);
				$("#btn7down").show(1000);
			});

			/* A LA DECOUVERTE DE CRUS D'EXCEPTION */
			$("#btn8down").click(function() {
				$(this).fadeOut(1000);
				$("#compo5").show(1000);
				$("#btn8up").show(1000);
			});
			$("#btn8up").click(function() {
				$(this).fadeOut(1000);
				$("#compo5").fadeOut(1000);
				$("#btn8down").show(1000);
			});

			/* LE TOUR DES PARC A HUITRES */
			$("#btn9down").click(function() {
				$(this).fadeOut(1000);
				$("#compo6").show(1000);
				$("#btn9up").show(1000);
			});
			$("#btn9up").click(function() {
				$(this).fadeOut(1000);
				$("#compo6").fadeOut(1000);
				$("#btn9down").show(1000);
			});

});