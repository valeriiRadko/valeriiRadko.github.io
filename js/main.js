jQuery(document).ready(function($) {
  console.log("Thank you for checking Valerii Radko CV");
  $('.level-bar-inner').css('width', '0');


  $('.level-bar-inner').each(function() {
    var itemWidth = $(this).data('level');

    $(this).animate({
      width: itemWidth
    }, 1000);
  });

});