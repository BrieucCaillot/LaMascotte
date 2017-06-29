$(document).ready(function() {

    // SCROLL
        // SCROLL DIV ABOUT
        $("#about").click(function() {
          $('html,body').animate({
              scrollTop: $("#placesection").offset().top},
              'slow');
        });

        $("#aboutdevice").click(function() {
          $('html,body').animate({
              scrollTop: $("#placesection").offset().top},
              'slow');
        });

        // SCROLL DIV HISTORY
        $("#history").click(function() {
          $('html,body').animate({
              scrollTop: $("#historysection").offset().top},
              'slow');
        });

        $("#historydevice").click(function() {
          $('html,body').animate({
              scrollTop: $("#historysection").offset().top},
              'slow');
        });

        // SCROLL DIV NEWS
        $("#news").click(function() {
          $('html,body').animate({
              scrollTop: $("#newssection").offset().top},
              'slow');
        });

        $("#newsdevice").click(function() {
          $('html,body').animate({
              scrollTop: $("#newssection").offset().top},
              'slow');
        });

    // SEE MORE
        // RESTAURANT
        $("#restaurantseemore").on('click', function(){
            $("#restaurantdisplay").show();
            $(this).hide();
            $("#restaurantreduce").show();
            $("#restaurantseemenu").hide();
        });

        $("#restaurantreduce").on('click', function(){
            $("#restaurantdisplay").hide();
            $(this).hide();
            $("#restaurantseemore").show();
            $("#restaurantseemenu").show();
        });

        // BAR
        $("#barseemore").on('click', function(){
            $("#bardisplay").show();
            $(this).hide();
            $("#barreduce").show();
            $("#barseecarte").hide();
        });

        $("#barreduce").on('click', function(){
            $("#bardisplay").hide();
            $(this).hide();
            $("#barseemore").show();
            $("#barseecarte").show();
        });

        // BAR
        $("#ecailleseemore").on('click', function(){
            $("#ecailledisplay").show();
            $(this).hide();
            $("#ecaillereduce").show();
            $("#ecailleseecarte").hide();
        });

        $("#ecaillereduce").on('click', function(){
            $("#ecailledisplay").hide();
            $(this).hide();
            $("#ecailleseemore").show();
            $("#ecailleseecarte").show();
        });

});
