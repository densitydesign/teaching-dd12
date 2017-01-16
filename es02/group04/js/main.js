/* Road map */

$(".rm-vuoto").hover(function(){
    $(this).toggleClass("nodisplay");
    
});


/* VIZ2 */
$(".VIZ2-btn").click(function(){
    $(this).prev().toggleClass( "VIZ2-off" );
    $(this).next ().toggleClass( "VIZ2-off" );           
});

/* VIZ5 */
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

$(".VIZ5-gruppo").hover(function(){
    $(".VIZ5-gruppo").toggleClass( "off" );
    $(this).toggleClass( "off" );           
});

$(".VIZ5-btn-yellow").click(function(){
    $(".VIZ5-rect-ylw").addClass( "rect5-off" );
    $(this).addClass( "rect5-off" );
});
$(".VIZ5-btn-yellow-active").click(function(){
    $(".VIZ5-btn-yellow").removeClass( "rect5-off" );
    $(".VIZ5-rect-ylw").removeClass( "rect5-off" );
});
 
$(".VIZ5-btn-orange").click(function(){
    $(".VIZ5-rect-orange").addClass( "rect5-off" );
    $(this).addClass( "rect5-off" );
});
$(".VIZ5-btn-orange-active").click(function(){
    $(".VIZ5-btn-orange").removeClass( "rect5-off" );
    $(".VIZ5-rect-orange").removeClass( "rect5-off" );
});


$(".VIZ5-btn-red").click(function(){
    $(".warning").removeClass( "off" );         
});
$(".VIZ5-btn-red-active").click(function(){
    $(".VIZ5-btn-red").removeClass( "rect5-off" );
    $(".VIZ5-rect-red").removeClass( "rect5-off" );
});

$(".yes").click(function(){
    $(".VIZ5-rect-red").addClass( "rect5-off" );
    $(".warning").addClass( "off" );
    $(".VIZ5-btn-red").addClass ("rect5-off");
});

$(".no").click(function(){
    $(".warning").addClass( "off" );
});




/* VIZ4.2 Alluvial */

$("#btn-ytb").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-cbs").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-cnn").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-fox").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-liveleak").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-nbc").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-abc").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-leak").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-bbc").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-reuters").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-sky").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-usatoday").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-euronews").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-zerocensorship").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-cctv").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-presstv").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#btn-voa").click(function(){
    $(".VIZ4-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});
$("#resetVIZ4-2").click(function(){
    $(".VIZ4-flusso").removeClass( "flusso-off" );
});

/* VIZ4.1 queries+video */
$("#btn-uncensored").click(function(){
    $(".VIZ4-rect").addClass( "rect4-off" );
    $(this).next().removeClass( "rect4-off" );    
});
$("#btn-uncensored").hover(function(){
    $("#targa-uncensored").toggleClass( "targa-on" );    
});

$("#btn-obscured").click(function(){
    $(".VIZ4-rect").addClass( "rect4-off" );
    $(this).next().removeClass( "rect4-off" );
});
$("#btn-obscured").hover(function(){
    $("#targa-obscured").toggleClass( "targa-on" );    
});

$("#btn-cutted").click(function(){
    $(".VIZ4-rect").addClass( "rect4-off" );
    $(this).next().removeClass( "rect4-off" );
});
$("#btn-cutted").hover(function(){
    $("#targa-cutted").toggleClass( "targa-on" );    
});

$("#btn-videoframe").click(function(){
    $(".VIZ4-rect").addClass( "rect4-off" );
    $(this).next().removeClass( "rect4-off" );
});
$("#btn-videoframe").hover(function(){
    $("#targa-videoframe").toggleClass( "targa-on" );    
});

$("#btn-general").click(function(){
    $(".VIZ4-rect").addClass( "rect4-off" );
    $(this).next().removeClass( "rect4-off" );
});
$("#btn-general").hover(function(){
    $("#targa-general").toggleClass( "targa-on" );    
});

$("#btn-other").click(function(){
    $(".VIZ4-rect").addClass( "rect4-off" );
    $(this).next().removeClass( "rect4-off" );
});
$("#btn-other").hover(function(){
    $("#targa-other").toggleClass( "targa-on" );    
});

$("#btn-unavailable").click(function(){
    $(".VIZ4-rect").addClass( "rect4-off" );
    $(this).next().removeClass( "rect4-off" );
});
$("#btn-unavailable").hover(function(){
    $("#targa-unavailable").toggleClass( "targa-on" );    
});


$("#resetVIZ4-1").click(function(){
    $(".VIZ4-rect").removeClass( "rect4-off" );
});

//* VIZ7 Word Polarization */

$(".isis").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-isis").removeClass( "grp-off" );
});

$(".jordan").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-jordan").removeClass( "grp-off" );
});

$(".world").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-world").removeClass( "grp-off" );
});

$(".war").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-war").removeClass( "grp-off" );
});

$(".kill").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-kill").removeClass( "grp-off" );
});

$(".fuck").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-fuck").removeClass( "grp-off" );
});

$(".alive").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-alive").removeClass( "grp-off" );
});

$(".pilot").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-pilot").removeClass( "grp-off" );
});

$(".execute").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-execute").removeClass( "grp-off" );
});

$(".believe").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-believe").removeClass( "grp-off" );
});

$(".burning").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-burning").removeClass( "grp-off" );
});

$(".fucking").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-fucking").removeClass( "grp-off" );
});

$(".video").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-video").removeClass( "grp-off" );
});

$(".burn").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-burn").removeClass( "grp-off" );
});

$(".savage").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-savage").removeClass( "grp-off" );
});

$(".life").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-life").removeClass( "grp-off" );
});

$(".god").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-god").removeClass( "grp-off" );
});

$(".shit").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-shit").removeClass( "grp-off" );
});

$(".fire").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-fire").removeClass( "grp-off" );
});

$(".religion").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-religion").removeClass( "grp-off" );
});

$(".islamic").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-islamic").removeClass( "grp-off" );
});

$(".death").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-death").removeClass( "grp-off" );
});

$(".sick").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-sick").removeClass( "grp-off" );
});

$(".face").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-face").removeClass( "grp-off" );
});

$(".islam").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-islam").removeClass( "grp-off" );
});
$(".death").click(function(){
    $(".VIZ7-start").addClass( "grp-off" );
    $(".VIZ7-grp").addClass( "grp-off" );
    $("#grp-death").removeClass( "grp-off" );
});

/* VIZ 8 */


$("#againstCensure").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#proCensure").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#videoProduction").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#pilotsDeath").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#videoCruelty").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#jordansHostages").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#politicalOpinions_1_").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#againstBombing").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#insultsToIsis").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#isisInhumanity").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#proIsisAnn").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#islamicRef").click(function(){
    $(".VIZ8-flusso").addClass( "flusso-off" );
    $(this).next().removeClass( "flusso-off" );
});

$("#reset8").click(function(){
    $(".VIZ8-flusso").removeClass( "flusso-off" );
   
});