$(window).on('load', function() { // makes sure the whole site is loaded
  $('#preload-image').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the black div that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
