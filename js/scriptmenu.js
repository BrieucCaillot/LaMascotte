jQuery(document).ready(function($) {

/* SCROLL */ 

	/* LES MENUS */
	window.onscroll = function(){

		var body = document.getElementsByTagName("body");
		var h3menu = document.getElementById("h3menu");
		var svgmenu = document.getElementById('svgmenu');

	    if (document.body.scrollTop < 580){
	        h3menu.style.position = "absolute";
	        h3menu.style.top = "0px";
	        svgmenu.style.position = "absolute";
	        svgmenu.style.top = "30px";
	    }   
	    else if (document.body.scrollTop >= 580 && document.body.scrollTop <= 1200){
	        h3menu.style.position = "fixed";
	        h3menu.style.top = "20px";
	        svgmenu.style.position = "fixed";
	        svgmenu.style.top = "50px";
	    }
	    else if (document.body.scrollTop > 1200){
	        h3menu.style.position = "absolute";
	        h3menu.style.top = "170px"; 
	        svgmenu.style.position = "absolute";
	        svgmenu.style.top = "170px"; 
	        console.log('oktm');
	    }
	};

	/* LES ENTRÉES */
	window.onscroll = function(){

		var body = document.getElementsByTagName("body");
		var h3entree = document.getElementById("h3entree");
		var svgentree = document.getElementById('svgentree');

	    if (document.body.scrollTop < 1300){
	        h3entree.style.position = "absolute";
	        h3entree.style.top = "0px";
	        svgentree.style.position = "absolute";
	        svgentree.style.top = "30px";
	    }   
	    else if (document.body.scrollTop >= 1300 && document.body.scrollTop <= 1600){
	        h3entree.style.position = "fixed";
	        h3entree.style.top = "20px";
	        svgentree.style.position = "fixed";
	        svgentree.style.top = "50px";
	    }
	    else if (document.body.scrollTop > 1600){
	        h3entree.style.position = "absolute";
	        h3entree.style.top = "170px"; 
	        svgentree.style.position = "absolute";
	        svgentree.style.top = "170px"; 
	    }
	};

/* LES MENUS */

	/* MENU MASCOTTE */
	$("#btn1down").click(function(){
		$(this).hide(1000);
		console.log('inside');
		$("#entree1").show(1000);
		$("#plats1").show(1000);
		$("#dessert1").show(1000);
		$("#btn1up").show(1000);
	});

	$("#btn1up").click(function(){
		$(this).hide(1000);
		console.log('inside');
		$("#entree1").hide(1000);
		$("#plats1").hide(1000);
		$("#dessert1").hide(1000);
		$("#btn1down").show(1000);
	});

	/* MENU COCOTTE */
	$("#btn2down").click(function(){
		$(this).hide(1000);
		console.log('inside');
		$("#entree2").show(1000);
		$("#plats2").show(1000);
		$("#dessert2").show(1000);
		$("#btn2up").show(1000);
	});

	$("#btn2up").click(function(){
		$(this).hide(1000);
		console.log('inside');
		$("#entree2").hide(1000);
		$("#plats2").hide(1000);
		$("#dessert2").hide(1000);
		$("#btn2down").show(1000);
	});

	/* MENU MARMOTTE */
	$("#btn3down").click(function(){
		$(this).hide(1000);
		console.log('inside');
		$("#plats3").show(1000);
		$("#dessert3").show(1000);
		$("#btn3up").show(1000);
	});

	$("#btn3up").click(function(){
		$(this).hide(1000);
		console.log('inside');
		$("#plats3").hide(1000);
		$("#dessert3").hide(1000);
		$("#btn3down").show(1000);
	});


/* LES PLATS */

	/* LES COMPOSITIONS */

		/* LE ROYAL MASCOTTE */
		$("#btn4down").click(function() {
			$(this).hide(1000);
			$("#compo1").show(1000);
			$("#btn4up").show(1000);
		});
		$("#btn4up").click(function() {
			$(this).hide(1000);
			$("#compo1").hide(1000);
			$("#btn4down").show(1000);
		});

		/* LE PLATEAU MASCOTTE */
		$("#btn5down").click(function() {
			$(this).hide(1000);
			$("#compo2").show(1000);
			$("#btn5up").show(1000);
		});
		$("#btn5up").click(function() {
			$(this).hide(1000);
			$("#compo2").hide(1000);
			$("#btn5down").show(1000);
		});

		/* L'ESCALLE DE LA MASCOTTE */
		$("#btn6down").click(function() {
			$(this).hide(1000);
			$("#compo3").show(1000);
			$("#btn6up").show(1000);
		});
		$("#btn6up").click(function() {
			$(this).hide(1000);
			$("#compo3").hide(1000);
			$("#btn6down").show(1000);
		});

		/* A LA DECOUVERTE DE CRUS D'EXCEPTION */
		$("#btn7down").click(function() {
			$(this).hide(1000);
			$("#compo4").show(1000);
			$("#btn7up").show(1000);
		});
		$("#btn7up").click(function() {
			$(this).hide(1000);
			$("#compo4").hide(1000);
			$("#btn7down").show(1000);
		});

		/* A LA DECOUVERTE DE CRUS D'EXCEPTION */
		$("#btn8down").click(function() {
			$(this).hide(1000);
			$("#compo5").show(1000);
			$("#btn8up").show(1000);
		});
		$("#btn8up").click(function() {
			$(this).hide(1000);
			$("#compo5").hide(1000);
			$("#btn8down").show(1000);
		});

		/* LE TOUR DES PARC A HUITRES */
		$("#btn9down").click(function() {
			$(this).hide(1000);
			$("#compo6").show(1000);
			$("#btn9up").show(1000);
		});
		$("#btn9up").click(function() {
			$(this).hide(1000);
			$("#compo6").hide(1000);
			$("#btn9down").show(1000);
		});
});