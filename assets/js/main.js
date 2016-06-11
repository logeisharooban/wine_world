$(document).ready(function() {
  $("#main-slider").owlCarousel({
	  nav : false,
	  items : 1,
	  pagination : false,
  });//Main slider
  
  $("#popular-products-slider").owlCarousel({
    margin: 20,
    nav : false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    },
    pagination : true,
  });//Testimonials slider

  $("#drag-slider").slider({
    tooltip:'hide',
  });
  $("#drag-slider").on("slide", function(slideEvt) {
    $(".start-price").text(slideEvt.value[0]);
    $(".end-price").text(slideEvt.value[1]);
  });

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
    
});