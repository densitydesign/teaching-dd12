//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function(){

    // cambio l'altezza dello slider in base all'altezza della finestra
    var windowHeight = $(window).height(),
		topSection = $('.slider-item');
	topSection.css('height', windowHeight);

	$(window).resize(function(){
		var windowHeight = $(window).height();
		topSection.css('height', windowHeight);
	});
    
    
    // attivo il menu per la versione responsive
    jQuery("#nav ul#primary-nav").slicknav({
        brand:'<img src="img0/logo.png" /><span>Yolo</span>'
    });
     
    // attivo lo scroller per il menu
    var s = skrollr.init();
    skrollr.menu.init(s, {
			change: function(hash, top) {
				console.log(hash, top);
			}
		});
       });
    
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

/*$('#header').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.header').outerHeight(true))
    }
  }
});*/

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });



$(document).ready(function(){
      $('.parallax').parallax();
    });


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});