
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


$(document).ready(function(){
  
    //Scrollspy
    $('body').scrollspy({target: ".navbar-fixed-top", offset: 100});   
    });
    
    
/* Fade Copertina */
$(window).scroll(function(){
    $(".copertina").css("opacity", 1 - $(window).scrollTop() / 676);
    
  });


/* Scrolling */

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".nav").offset().top > 676) {
        $(".mynavbar").addClass("top-nav-collapse");
    } else {
        $(".mynavbar").removeClass("top-nav-collapse");
    }
}


$(".bottone").click(function () {
    
    $bottone = $(this);
    $bottone.toggleClass('active')
    //getting the next element
    $content = $bottone.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(800, function () {
        
     });
});



