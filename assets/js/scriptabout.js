$(document).ready(function() {

    // SCROLL DIV ABOUT
    $("#about").click(function() {
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

    // SCROLL DIV NEWS
    $("#news").click(function() {
      $('html,body').animate({
          scrollTop: $("#newssection").offset().top},
          'slow');
    });
});
