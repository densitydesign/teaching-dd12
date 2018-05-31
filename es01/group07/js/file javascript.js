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

