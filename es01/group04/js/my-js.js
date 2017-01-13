


$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})


//Navbar
	
$(window).scroll(function(event){
    var top = $(this).scrollTop();
		if (top >= 10) {
                $('nav').removeClass("nav-up").addClass("nav-down");
            
            }
            if (top < 10) {
                $('nav').removeClass("nav-down").addClass("nav-up");
            }

	});

// scroll
$(document).ready(function() {
    $('.navbar-collapse, #header-scroll-btn').on('click', 'a', function(e) {
        // collapse navbar
        $('.navbar-collapse').collapse('hide');
        // scroll on anchor link click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
            }
            return false;
        }
    });
});

/*******************CONTATORE*********************/

//mi calcolo la posizione dell'oggetto contatore
var element_position = $('#contatore').offset().top;
var passato = 1;
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position-$(window).height();
    //alert('passato è ' + passato );
    if((y_scroll_pos > scroll_pos_test) && passato==1 ) {
      //  alert('passo');
        //Faccio partire l'animazione
        passato = 0;
        $('#GBnum_qaida').each(function () {
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

            $('#GBnum_isis1').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            $('#GBnum_isis2').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1600,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            $('#GBnum_haram').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1250,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            $('#GBnum_isis3').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        //alert('begin element');
    }
});

/* MAPPA */
$("#btn02A").hover(function(){
    $('.G02kill15').toggleClass("off");
    $('#linea02B').toggleClass("off");
});

$("#btn02B").hover(function(){
    $('.G02kill05').toggleClass("off");
    $('#linea02A').toggleClass("off");
});



/* G05 PALLUOZZ' */

$(".G05pallozzi").hover(function(){
    $(".G05pallozzi").removeClass( "on" );
    $(this).addClass( "on" );
    $(".G05targa").removeClass( "on" );
    $(this).prev().addClass( "on" );
            
});

/* GRAPH 06 ALLUVIAL GROUPS */



$("#btn06taliban").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprecttaliban").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussotaliban').addClass( "G06on" );
        
});

$("#btn06isis").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectisis").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoisis').addClass( "G06on" );
        
});

$("#btn06haram").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectharam").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoharam').addClass( "G06on" );
        
});

$("#btn06ttp").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectttp").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussottp').addClass( "G06on" );
        
});

$("#btn06shabaab").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectshabaab").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoshabaab').addClass( "G06on" );
        
});

$("#btn06farc").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectfarc").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussofarc').addClass( "G06on" );
        
});

$("#btn06ltte").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectltte").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoltte').addClass( "G06on" );
        
});

$("#btn06lra").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectlra").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussolra').addClass( "G06on" );
        
});

$("#btn06maoist").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectmaoist").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussomaoist').addClass( "G06on" );
        
});

$("#btn06qaida").click(function(){
    $(".G06grouprect").removeClass( "G06recton" );
    $("#G06grouprectqaida").addClass( "G06recton" );
    $(".G06gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G06flussi').removeClass( "G06on" );
    $('#G06flussoqaida').addClass( "G06on" );
        
});


/* GRAPH 08 ALLUVIAL VICTIMS */


$("#btn08taliban").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprecttaliban").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussotaliban').addClass( "G08on" );
        
});

$("#btn08isis").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectisis").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussoisis').addClass( "G08on" );
        
});

$("#btn08haram").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectharam").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussoharam').addClass( "G08on" );
        
});

$("#btn08ttp").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectttp").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussottp').addClass( "G08on" );
        
});

$("#btn08shabaab").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectshabaab").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussoshabaab').addClass( "G08on" );
        
});

$("#btn08farc").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectfarc").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussofarc').addClass( "G08on" );
        
});

$("#btn08ltte").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectltte").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussoltte').addClass( "G08on" );
        
});

$("#btn08maoist").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectmaoist").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussomaoist').addClass( "G08on" );
        
});

$("#btn08lra").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectlra").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussolra').addClass( "G08on" );
        
});

$("#btn08qaida").click(function(){
    $(".G8grouprect").removeClass( "G8recton" );
    $("#G8grouprectqaida").addClass( "G8recton" );
    $(".G08gruppi").removeClass( "idle" );
    $(this).addClass( "idle" );
    $('.G08flussi').removeClass( "G08on" );
    $('#G08flussoqaida').addClass( "G08on" );
        
});




/* GRAPH 10 MEDIA 1 */



$("#btn10taliban").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprecttaliban").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendtaliban').addClass( "on" );
        
});

$("#btn10isis").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectisis").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendisis').addClass( "on" );
        
});

$("#btn10haram").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectharam").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendharam').addClass( "on" );
        
});

$("#btn10ttp").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectttp").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendttp').addClass( "on" );
        
});

$("#btn10qaida").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectqaida").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendqaida').addClass( "on" );
        
});

$("#btn10shabaab").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectshabaab").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendshabaab').addClass( "on" );
        
});

$("#btn10lra").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectlra").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendlra').addClass( "on" );
        
});

$("#btn10maoist").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectmaoist").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendmaoist').addClass( "on" );
        
});

$("#btn10farc").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectfarc").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendfarc').addClass( "on" );
        
});

$("#btn10ltte").click(function(){
    $(".G10grouprect").removeClass( "on" );
    $("#G10grouprectltte").addClass( "on" );
    $(".G10gruppi").removeClass( "on" );
    $(this).addClass( "on" );
    $('.G10trend').removeClass( "on" );
    $('#G10trendltte').addClass( "on" );
        
});


/* CONTATOREEE */



