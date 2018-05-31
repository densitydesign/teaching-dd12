// Question 1
// Question 2
//Gephi

$(document).ready(function() {
    $('#seealso-2014').css('opacity','1');
    $('#seealso-2015').css('opacity','0');
    $('#seealso-2016').css('opacity','0');
    $('#seealso-2014').css('z-index','9999');
    $('#2014').css('background','#007CA8');
    $('#2014').css('color','white');
    $('#trump .st0').css('fill','#007ca8');
    $('#trump .st2').css('fill','white');
    $('#actors-2016 .st0').css('fill','black');
    $(".imgs img").css('display','none');
});


$("#2014").click(function() {
    $('#seealso-2014').css('opacity','1');
    $('#seealso-2014').css('z-index','9999');
    $('#seealso-2015').css('opacity','0');
    $('#seealso-2015').css('z-index','0');
    $('#seealso-2016').css('opacity','0');
    $('#seealso-2016').css('z-index','0');
    $('.button').css('background','white');
    $('.button').css('color','inherit');
    $(this).css('background','#007CA8');
    $(this).css('color','white');
    $('#my-viz #actors-2014').css('display','block');
    $('#my-viz #actors-2015').css('display','none');
    $('#my-viz #actors-2016').css('display','none');
    $('#rank-2014').css('display','block');
    $('#rank-2015').css('display','none');
    $('#rank-2016').css('display','none');

    $('#actors-2014 #international').css('opacity','1');
    $('#actors-2014 #scientific').css('opacity','1');
    $('#actors-2014 #entertainement').css('opacity','1');
    $('#actors-2014 #politica-interna').css('opacity','1');
    $('#actors-2014 #corporations').css('opacity','1');

    $('#actors-2015 #international').css('opacity','1');
    $('#actors-2015 #scientific').css('opacity','1');
    $('#actors-2015 #entertainement').css('opacity','1');
    $('#actors-2015 #politica-interna').css('opacity','1');
    $('#actors-2015 #corporations').css('opacity','1');

    $('#actors-2016 #international').css('opacity','1');
    $('#actors-2016 #scientific').css('opacity','1');
    $('#actors-2016 #entertainement').css('opacity','1');
    $('#actors-2016 #politica-interna').css('opacity','1');
    $('#actors-2016 #corporations').css('opacity','1');
});

$("#2015").click(function() {
    $('#seealso-2014').css('opacity','0');
    $('#seealso-2015').css('z-index','0');
    $('#seealso-2015').css('opacity','1');
    $('#seealso-2015').css('z-index','9999');
    $('#seealso-2016').css('opacity','0');
    $('#seealso-2016').css('z-index','0');
    $('.button').css('background','white');
    $('.button').css('color','inherit');
    $(this).css('color','white');
    $(this).css('background','#007CA8');
    $(this).css('color','white');
    $('#rank-2014').css('display','none');
    $('#rank-2015').css('display','block');
    $('#rank-2016').css('display','none');
    $('.people #trump').attr('src','assets/question6/trump/trump_15.png');
    $('#actors-2014 #international').css('opacity','1');
    $('#actors-2014 #scientific').css('opacity','1');
    $('#actors-2014 #entertainement').css('opacity','1');
    $('#actors-2014 #politica-interna').css('opacity','1');
    $('#actors-2014 #corporations').css('opacity','1');

    $('#actors-2015 #international').css('opacity','1');
    $('#actors-2015 #scientific').css('opacity','1');
    $('#actors-2015 #entertainement').css('opacity','1');
    $('#actors-2015 #politica-interna').css('opacity','1');
    $('#actors-2015 #corporations').css('opacity','1');

    $('#actors-2016 #international').css('opacity','1');
    $('#actors-2016 #scientific').css('opacity','1');
    $('#actors-2016 #entertainement').css('opacity','1');
    $('#actors-2016 #politica-interna').css('opacity','1');
    $('#actors-2016 #corporations').css('opacity','1');
});

$("#2016").click(function() {
    $('#seealso-2014').css('opacity','0');
    $('#seealso-2014').css('z-index','0');
    $('#seealso-2015').css('opacity','0');
    $('#seealso-2015').css('z-index','0');
    $('#seealso-2016').css('opacity','1');
    $('#seealso-2016').css('z-index','9999');
    $('.button').css('background','white');
    $('.button').css('color','inherit');
    $(this).css('background','#007CA8');
    $(this).css('color','white');
    $('#rank-2014').css('display','none');
    $('#rank-2015').css('display','none');
    $('#rank-2016').css('display','block');
    $('.people #trump').attr('src','assets/question6/trump/trump_16.png');
    $('#actors-2014 #international').css('opacity','1');
    $('#actors-2014 #scientific').css('opacity','1');
    $('#actors-2014 #entertainement').css('opacity','1');
    $('#actors-2014 #politica-interna').css('opacity','1');
    $('#actors-2014 #corporations').css('opacity','1');

    $('#actors-2015 #international').css('opacity','1');
    $('#actors-2015 #scientific').css('opacity','1');
    $('#actors-2015 #entertainement').css('opacity','1');
    $('#actors-2015 #politica-interna').css('opacity','1');
    $('#actors-2015 #corporations').css('opacity','1');

    $('#actors-2016 #international').css('opacity','1');
    $('#actors-2016 #scientific').css('opacity','1');
    $('#actors-2016 #entertainement').css('opacity','1');
    $('#actors-2016 #politica-interna').css('opacity','1');
    $('#actors-2016 #corporations').css('opacity','1');
});

//Question 2
//Bump Chart
$(document).ready(function() {
    $('#my-viz .st10').css('opacity','0.1');
    $('#e-economy').css('opacity','1');
    $('#l-economy').css('opacity','0.5');
    $('#l-meeting').css('opacity','0.1');
    $('#l-causes').css('opacity','0.1');
    $('#l-action').css('opacity','0.1');
    $('#l-politics').css('opacity','0.1');
    $('#l-media').css('opacity','0.1');
    $('#l-denial').css('opacity','0.1');
    $('#l-effects').css('opacity','0.1');
    $('#l-renewable').css('opacity','0.1');
    $('#l-people').css('opacity','0.1');
    $('#l-risk').css('opacity','0.1');
    $('#l-prevention').css('opacity','0.1');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
    });

$(".st10").click(function() {
    $('.st10').css('opacity','0.5');
});

$("#meeting").click(function() {
    $('#e-meeting').css('opacity','1');
    $('#l-meeting').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');

});

$("#economy").click(function() {
    $('#e-economy').css('opacity','1');
    $('#l-economy').css('opacity','0.5');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#causes").click(function() {
    $('#e-causes').css('opacity','1');
    $('#l-causes').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#action").click(function() {
    $('#e-action').css('opacity','1');
    $('#l-action').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#politics").click(function() {
    $('#e-politics').css('opacity','1');
    $('#l-politics').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#media").click(function() {
    $('#e-media').css('opacity','1');
    $('#l-media').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#denial").click(function() {
    $('#e-denial').css('opacity','1');
    $('#l-denial').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#effects").click(function() {
    $('#e-effects').css('opacity','1');
    $('#l-effects').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#renewable").click(function() {
    $('#e-renewable').css('opacity','1');
    $('#l-renewable').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#people").click(function() {
    $('#e-people').css('opacity','1');
    $('#l-people').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-risk').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#risk").click(function() {
    $('#e-risk').css('opacity','1');
    $('#l-risk').css('opacity','0.5');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-prevention').css('opacity','0');
});

$("#prevention").click(function() {
    $('#e-prevention').css('opacity','1');
    $('#l-prevention').css('opacity','0.3');
    $('#e-economy').css('opacity','0');
    $('#e-meeting').css('opacity','0');
    $('#e-causes').css('opacity','0');
    $('#e-action').css('opacity','0');
    $('#e-politics').css('opacity','0');
    $('#e-media').css('opacity','0');
    $('#e-denial').css('opacity','0');
    $('#e-effects').css('opacity','0');
    $('#e-people').css('opacity','0');
    $('#e-renewable').css('opacity','0');
    $('#e-risk').css('opacity','0');
});





$(".st10").click(function() {
    $('.st10').css('opacity','0.1');
});

$(".st11").click(function() {
    $('.st11').css('opacity','0');
});


// Question 3
$(document).ready(function() {
    $('#rank-2014').css('display','block');
    $('#rank-2015').css('display','none');
    $('#rank-2016').css('display','none');
    $('.relevance .st4').css('opacity','0.3');
});

$("#rank-2014 #wapost").mouseover(function() {
    $('#wapost .st4').css('opacity','1');
    $('#provider').text('Washington Post - washingtonpost.com');
});

$("#rank-2016 #wapost").mouseover(function() {
    $('#wapost .st4').css('opacity','1');
    $('#provider').text('Washington Post - washingtonpost.com');
});

$("#rank-2014 #mother").mouseover(function() {
    $('#mother .st4').css('opacity','1');
    $('#provider').text('Mother Jones - motherjones.com');
});

$("#rank-2015 #mother").mouseover(function() {
    $('#mother .st4').css('opacity','1');
    $('#provider').text('Mother Jones - motherjones.com');
});

$("#rank-2016 #mother").mouseover(function() {
    $('#mother .st4').css('opacity','1');
    $('#provider').text('Mother Jones - motherjones.com');
});

$("#rank-2014 #scientific").mouseover(function() {
    $('#scientific .st4').css('opacity','1');
    $('#provider').text('Scientific American - scientificamerican.com');
});

$("#rank-2015 #scientific").mouseover(function() {
    $('#scientific .st4').css('opacity','1');
    $('#provider').text('Scientific American - scientificamerican.com');
});

$("#rank-2016 #scientific").mouseover(function() {
    $('#scientific .st4').css('opacity','1');
    $('#provider').text('Scientific American - scientificamerican.com');
});

$("#rank-2014 #sidney").mouseover(function() {
    $('#sidney .st4').css('opacity','1');
    $('#provider').text('The Sydney Morning Herald - smh.com');
});

$("#rank-2015 #sidney").mouseover(function() {
    $('#sidney .st4').css('opacity','1');
    $('#provider').text('The Sydney Morning Herald - smh.com');
});

$("#rank-2016 #sidney").mouseover(function() {
    $('#sidney .st4').css('opacity','1');
    $('#provider').text('The Sydney Morning Herald - smh.com');
});

$("#rank-2014 #latimes").mouseover(function() {
    $('#latimes .st4').css('opacity','1');
    $('#provider').text('Los Angeles Times - latimes.com');
});

$("#rank-2015 #latimes").mouseover(function() {
    $('#latimes .st4').css('opacity','1');
    $('#provider').text('Los Angeles Times - latimes.com');
});

$("#rank-2016 #latimes").mouseover(function() {
    $('#latimes .st4').css('opacity','1');
    $('#provider').text('Los Angeles Times - latimes.com ');
});

$("#rank-2014 #huffpost").mouseover(function() {
    $('#huffpost .st4').css('opacity','1');
    $('#provider').text('The Huffington Post - huffingtonpost.com');
});

$("#rank-2015 #huffpost").mouseover(function() {
    $('#huffpost .st4').css('opacity','1');
    $('#provider').text('The Huffington Post - huffingtonpost.com');
});

$("#rank-2016 #huffpost").mouseover(function() {
    $('#huffpost .st4').css('opacity','1');
    $('#provider').text('The Huffington Post - huffingtonpost.com');
});

$("#rank-2014 #natgeo").mouseover(function() {
    $('#natgeo .st4').css('opacity','1');
    $('#provider').text('National Geographic - nationalgeographic.com');
});

$("#rank-2015 #natgeo").mouseover(function() {
    $('#natgeo .st4').css('opacity','1');
    $('#provider').text('National Geographic - nationalgeographic.com');
});

$("#rank-2016 #natgeo").mouseover(function() {
    $('#natgeo .st4').css('opacity','1');
    $('#provider').text('National Geographic - nationalgeographic.com');
});

$("#rank-2014 #thinkprogress").mouseover(function() {
    $('#thinkprogress .st4').css('opacity','1');
    $('#provider').text('ThinkProgress - thinkprogress.org');
});

$("#rank-2015 #thinkprogress").mouseover(function() {
    $('#thinkprogress .st4').css('opacity','1');
    $('#provider').text('ThinkProgress - thinkprogress.org');
});

$("#rank-2016 #thinkprogress").mouseover(function() {
    $('#thinkprogress .st4').css('opacity','1');
    $('#provider').text('ThinkProgress - thinkprogress.org');
});

$("#rank-2014 #nytimes").mouseover(function() {
    $('#nytimes .st4').css('opacity','1');
    $('#provider').text('New York Times - nytimes.com');
});

$("#rank-2015 #nytimes").mouseover(function() {
    $('#nytimes .st4').css('opacity','1');
    $('#provider').text('New York Times - nytimes.com');
});

$("#rank-2016 #nytimes").mouseover(function() {
    $('#nytimes .st4').css('opacity','1');
    $('#provider').text('New York Times - nytimes.com');
});

$("#rank-2014 #guardian").mouseover(function() {
    $('#guardian .st4').css('opacity','1');
    $('#provider').text('The Guardian - theguardian.com');
});

$("#rank-2015 #guardian").mouseover(function() {
    $('#guardian .st4').css('opacity','1');
    $('#provider').text('The Guardian - theguardian.com');
});

$("#rank-2016 #guardian").mouseover(function() {
    $('#guardian .st4').css('opacity','1');
    $('#provider').text('The Guardian - theguardian.com');
});

$("#rank-2014 #time").mouseover(function() {
    $('#time .st4').css('opacity','1');
    $('#provider').text('TIME - time.com');
});

$("#rank-2015 #time").mouseover(function() {
    $('#time .st4').css('opacity','1');
    $('#provider').text('TIME - time.com');
});

$("#rank-2016 #time").mouseover(function() {
    $('#time .st4').css('opacity','1');
    $('#provider').text('TIME - time.com');
});

$("#rank-2014 #wsj").mouseover(function() {
    $('#wsj .st4').css('opacity','1');
    $('#provider').text('Wall Street Journal - wsj.com');
});

$("#rank-2015 #wsj").mouseover(function() {
    $('#wsj .st4').css('opacity','1');
    $('#provider').text('Wall Street Journal - wsj.com');
});

$("#rank-2016 #wsj").mouseover(function() {
    $('#wsj .st4').css('opacity','1');
    $('#provider').text('Wall Street Journal - wsj.com');
});

$("#rank-2014 #climate").mouseover(function() {
    $('#climate .st4').css('opacity','1');
    $('#provider').text('Climate Home - climatechangenews.com');
});

$("#rank-2015 #climate").mouseover(function() {
    $('#climate .st4').css('opacity','1');
    $('#provider').text('Climate Home - climatechangenews.com');
});    

$("#rank-2016 #climate").mouseover(function() {
    $('#climate .st4').css('opacity','1');
    $('#provider').text('Climate Home - climatechangenews.com');
});

$("#rank-2014 #ibt").mouseover(function() {
    $('#ibt .st4').css('opacity','1');
    $('#provider').text('International Business Time - ibt.com');
});

$("#rank-2015 #ibt").mouseover(function() {
    $('#ibt .st4').css('opacity','1');
    $('#provider').text('International Business Time - ibt.com');
});

$("#rank-2016 #ibt").mouseover(function() {
    $('#ibt .st4').css('opacity','1');
    $('#provider').text('International Business Time - ibt.com');
});

$("#rank-2014 #indian").mouseover(function() {
    $('#indian .st4').css('opacity','1');
    $('#indian .st5').css('opacity','1');
    $('#provider').text('The Indian Express - indianexpress.com');
});

$("#rank-2015 #indian").mouseover(function() {
    $('#indian .st4').css('opacity','1');
    $('#indian .st5').css('opacity','1');
    $('#provider').text('The Indian Express - indianexpress.com');
});

$("#rank-2016 #indian").mouseover(function() {
    $('#indian .st4').css('opacity','1');
    $('#indian .st5').css('opacity','1');
    $('#provider').text('The Indian Express - indianexpress.com');
});


$("#rank-2014 #christian").mouseover(function() {
    $('#christian .st4').css('opacity','1');
    $('#provider').text('Christian Science Monitor - csmonitor.com');
});

$("#rank-2015 #christian").mouseover(function() {
    $('#christian .st4').css('opacity','1');
    $('#provider').text('Christian Science Monitor - csmonitor.com');
});

$("#rank-2016 #christian").mouseover(function() {
    $('#christian .st4').css('opacity','1');
    $('#provider').text('Christian Science Monitor - csmonitor.com');
});

$("#rank-2014 #cnn").mouseover(function() {
    $('#cnn .st4').css('opacity','1');
    $('#provider').text('CNN - cnn.com');
});

$("#rank-2015 #cnn").mouseover(function() {
    $('#cnn .st4').css('opacity','1');
    $('#provider').text('CNN - cnn.com');
});

$("#rank-2016 #cnn").mouseover(function() {
    $('#cnn .st4').css('opacity','1');
    $('#provider').text('CNN - cnn.com');
});

$(".relevance .st4").mouseout(function() {
    $('.st4').css('opacity','0.3');
    $('#provider').text('');
});

// Grey providers //

//2014 - primo posto//

$("#week-1").mouseover(function() {
    $('#week-1').css('fill','rgb(229,198,122)');
     $('#provider').text('Bill Moyers - billmoyers.com');
});

$("#week-3").mouseover(function() {
    $('#week-3').css('fill','rgb(229,198,122)');
     $('#provider').text('Usa Today - usatoday.com');
});

$("#week-4").mouseover(function() {
    $('#week-4').css('fill','rgb(229,198,122)');
    $('#week-11').css('fill','rgb(229,198,122)');
     $('#provider').text('The White House - whitehouse.gov');
});

$("#week-5").mouseover(function() {
    $('#week-5').css('fill','rgb(229,198,122)');
     $('#provider').text('Stanford University News - blog.stanford.edu');
});

$("#week-6").mouseover(function() {
    $('#week-6').css('fill','rgb(229,198,122)');
     $('#provider').text('National Public Radio - npr.com');
});

$("#week-11").mouseover(function() {
    $('#week-11').css('fill','rgb(229,198,122)');
    $('#week-4').css('fill','rgb(229,198,122)');
     $('#provider').text('The White House - whitehouse.gov');
});

$("#rank-2014 .st8").mouseout(function() {
    $('#rank-2014 .st8').css('fill','rgb(228,228,228)');
    $('#provider').text('');
});

//2015 - primo posto//

$("#rank-2015 #week-3").mouseover(function() {
    $('#rank-2015 #week-3').css('fill','rgb(229,198,122)');
     $('#provider').text('The White House - whitehouse.gov');
});

$("#rank-2015 #week-6").mouseover(function() {
    $('#rank-2015 #week-6').css('fill','rgb(229,198,122)');
     $('#provider').text('World Bank - worldbank.org');
});

$("#rank-2015 #week-10").mouseover(function() {
    $('#rank-2015 #week-10').css('fill','rgb(229,198,122)');
     $('#provider').text('Forbes - forbes.com');
});

$("#rank-2015 #week-11").mouseover(function() {
    $('#rank-2015 #week-11').css('fill','rgb(229,198,122)');
     $('#provider').text('CNN - cnn.com');
});

$("#rank-2015 #week-12").mouseover(function() {
    $('#rank-2015 #week-12').css('fill','rgb(229,198,122)');
     $('#provider').text('World Health Organization - who.int');
});


$("#rank-2015 .st8").mouseout(function() {
    $('#rank-2015 .st8').css('fill','rgb(228,228,228)');
    $('#provider').text('');
});

//2016 - primo posto//

$("#rank-2016 #week-2").mouseover(function() {
    $('#week-2').css('fill','rgb(229,198,122)');
     $('#provider').text('The Weekly Standard - weeklystandard.com');
});

$("#rank-2016 #week-3").mouseover(function() {
    $('#rank-2016 #week-3').css('fill','rgb(229,198,122)');
     $('#provider').text('The Hill - thehill.com');
});

$("#rank-2016 #week-5").mouseover(function() {
    $('#rank-2016 #week-5').css('fill','rgb(229,198,122)');
     $('#provider').text('National Public Radio - npr.com');
});

$("#rank-2016 #week-6").mouseover(function() {
    $('#rank-2016 #week-6').css('fill','rgb(229,198,122)');
     $('#provider').text('NBC News - nbcnews.com');
});

$("#rank-2016 #week-7").mouseover(function() {
    $('#rank-2016 #week-7').css('fill','rgb(229,198,122)');
     $('#provider').text('National Public Radio - npr.com');
});

$("#rank-2016 #week-9").mouseover(function() {
    $('#rank-2016 #week-9').css('fill','rgb(229,198,122)');
     $('#provider').text('Science Daily - sciencedaily.com');
});

$("#rank-2016 #week-10").mouseover(function() {
    $('#rank-2016 #week-10').css('fill','rgb(229,198,122)');
     $('#provider').text('FactCheck.org');
});

$("#rank-2016 .st8").mouseout(function() {
    $('#rank-2016 .st8').css('fill','rgb(228,228,228)');
    $('#provider').text('');
});

// Question 4
$(document).ready(function() {
    $('#actors-2014').css('display','block');
    $('#actors-2015').css('display','none');
    $('#actors-2016').css('display','none');
});

$("#2014").click(function() {
    $('#actors-2014').css('display','block');
    $('#actors-2015').css('display','none');
    $('#actors-2016').css('display','none');
});

$("#2015").click(function() {
    $('#actors-2014').css('display','none');
    $('#actors-2015').css('display','block');
    $('#actors-2016').css('display','none');
});

$("#2016").click(function() {
    $('#actors-2014').css('display','none');
    $('#actors-2015').css('display','none');
    $('#actors-2016').css('display','block');
});

// QUESTION 4
$("#ip").click(function() {
    $('#actors-2014 #international').css('opacity','1');
    $('#actors-2014 #scientific').css('opacity','0.2');
    $('#actors-2014 #entertainement').css('opacity','0.2');
    $('#actors-2014 #politica-interna').css('opacity','0.2');
    $('#actors-2014 #corporations').css('opacity','0.2');

    $('#actors-2015 #international').css('opacity','1');
    $('#actors-2015 #scientific').css('opacity','0.2');
    $('#actors-2015 #entertainement').css('opacity','0.2');
    $('#actors-2015 #politica-interna').css('opacity','0.2');
    $('#actors-2015 #corporations').css('opacity','0.2');

    $('#actors-2016 #international').css('opacity','1');
    $('#actors-2016 #scientific').css('opacity','0.2');
    $('#actors-2016 #entertainement').css('opacity','0.2');
    $('#actors-2016 #politica-interna').css('opacity','0.2');
    $('#actors-2016 #corporations').css('opacity','0.2');
});

$("#ap").click(function() {
    $('#actors-2014 #international').css('opacity','0.2');
    $('#actors-2014 #scientific').css('opacity','0.2');
    $('#actors-2014 #entertainement').css('opacity','0.2');
    $('#actors-2014 #politica-interna').css('opacity','1');
    $('#actors-2014 #corporations').css('opacity','0.2');

    $('#actors-2015 #international').css('opacity','0.2');
    $('#actors-2015 #scientific').css('opacity','0.2');
    $('#actors-2015 #entertainement').css('opacity','0.2');
    $('#actors-2015 #politica-interna').css('opacity','1');
    $('#actors-2015 #corporations').css('opacity','0.2');

    $('#actors-2016 #international').css('opacity','0.2');
    $('#actors-2016 #scientific').css('opacity','0.2');
    $('#actors-2016 #entertainement').css('opacity','0.2');
    $('#actors-2016 #politica-interna').css('opacity','1');
    $('#actors-2016 #corporations').css('opacity','0.2');
});

$("#sci").click(function() {
    $('#actors-2014 #international').css('opacity','0.2');
    $('#actors-2014 #scientific').css('opacity','1');
    $('#actors-2014 #entertainement').css('opacity','0.2');
    $('#actors-2014 #politica-interna').css('opacity','0.2');
    $('#actors-2014 #corporations').css('opacity','0.2');

    $('#actors-2015 #international').css('opacity','0.2');
    $('#actors-2015 #scientific').css('opacity','1');
    $('#actors-2015 #entertainement').css('opacity','0.2');
    $('#actors-2015 #politica-interna').css('opacity','0.2');
    $('#actors-2015 #corporations').css('opacity','0.2');

    $('#actors-2016 #international').css('opacity','1');
    $('#actors-2016 #scientific').css('opacity','0.2');
    $('#actors-2016 #entertainement').css('opacity','0.2');
    $('#actors-2016 #politica-interna').css('opacity','0.2');
    $('#actors-2016 #corporations').css('opacity','0.2');
});

$("#ent").click(function() {
    $('#actors-2014 #international').css('opacity','0.2');
    $('#actors-2014 #scientific').css('opacity','0.2');
    $('#actors-2014 #entertainement').css('opacity','1');
    $('#actors-2014 #politica-interna').css('opacity','0.2');
    $('#actors-2014 #corporations').css('opacity','0.2');

    $('#actors-2015 #international').css('opacity','0.2');
    $('#actors-2015 #scientific').css('opacity','0.2');
    $('#actors-2015 #entertainement').css('opacity','1');
    $('#actors-2015 #politica-interna').css('opacity','0.2');
    $('#actors-2015 #corporations').css('opacity','0.2');

    $('#actors-2016 #international').css('opacity','0.2');
    $('#actors-2016 #scientific').css('opacity','0.2');
    $('#actors-2016 #entertainement').css('opacity','1');
    $('#actors-2016 #politica-interna').css('opacity','0.2');
    $('#actors-2016 #corporations').css('opacity','0.2');
});

$("#corp").click(function() {
    $('#actors-2014 #international').css('opacity','0.2');
    $('#actors-2014 #scientific').css('opacity','0.2');
    $('#actors-2014 #entertainement').css('opacity','0.2');
    $('#actors-2014 #politica-interna').css('opacity','0.2');
    $('#actors-2014 #corporations').css('opacity','1');

    $('#actors-2015 #international').css('opacity','0.2');
    $('#actors-2015 #scientific').css('opacity','0.2');
    $('#actors-2015 #entertainement').css('opacity','0.2');
    $('#actors-2015 #politica-interna').css('opacity','0.2');
    $('#actors-2015 #corporations').css('opacity','1');

    $('#actors-2016 #international').css('opacity','0.2');
    $('#actors-2016 #scientific').css('opacity','0.2');
    $('#actors-2016 #entertainement').css('opacity','0.2');
    $('#actors-2016 #politica-interna').css('opacity','0.2');
    $('#actors-2016 #corporations').css('opacity','1');
});

// Question 5
$("#overlay").mouseout(function() {
    $("#overlay").attr("src","");
});

$("#animals .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-animals").css('display','block');
    $("#animals .st0").css('fill','#7fb2cc');
});

$("#i-animals").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/animals.png");
});

$("#cold .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-cold").css('display','block');
    $("#cold .st0").css('fill','#7fb2cc');
});

$("#i-cold").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/cold.png");
});

$("#deforestation .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-deforestation").css('display','block');
    $("#deforestation .st0").css('fill','#7fb2cc');
});

$("#i-deforestation").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/deforestation.png");
});

$("#disasters .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-disasters").css('display','block');
    $("#disasters .st0").css('fill','#7fb2cc');
});

$("#i-disasters").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/disasters.png");
});

$("#earth .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-earth").css('display','block');
    $("#earth .st0").css('fill','#7fb2cc');
});

$("#i-earth").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/earth.png");
});

$("#food .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-food").css('display','block');
    $("#food .st0").css('fill','#7fb2cc');
});

$("#i-food").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/food.png");
});

$("#hot .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-hot").css('display','block');
    $("#hot .st0").css('fill','#7fb2cc');
});

$("#i-hot").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/hot.png");
});

$("#ice .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-ice").css('display','block');
    $("#ice .st0").css('fill','#7fb2cc');
});

$("#i-ice").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/ice.png");
});

$("#illness .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-illness").css('display','block');
    $("#illness .st0").css('fill','#7fb2cc');
});

$("#i-illness").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/illness.png");
});

$("#industries .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-industries").css('display','block');
    $("#industries .st0").css('fill','#7fb2cc');
});

$("#i-industries").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/industry.png");
});

$("#meeting .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-meeting").css('display','block');
    $("#meeting .st0").css('fill','#7fb2cc');
});

$("#i-meeting").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/meeting.png");
});

$("#plants .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-plants").css('display','block');
    $("#plants .st0").css('fill','#7fb2cc');
});

$("#i-plants").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/plants.png");
});

$("#pollution .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-pollution").css('display','block');
    $("#pollution .st0").css('fill','#7fb2cc');
});

$("#i-pollution").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/pollution.png");
});

$("#protest .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-protest").css('display','block');
    $("#protest .st0").css('fill','#7fb2cc');
});

$("#i-protest").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/protest.png");
});

$("#renewable .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-renewable").css('display','block');
    $("#renewable .st0").css('fill','#7fb2cc');
});

$("#i-renewable").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/renewable.png");
});

$("#sea .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-sea").css('display','block');
    $("#sea .st0").css('fill','#7fb2cc');
});

$("#i-sea").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/sea.png");
});

$("#viz1 .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-viz").css('display','block');
    $("#viz1 .st0").css('fill','#7fb2cc');
});

$("#i-viz").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/viz.png");
});

$("#work .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-work").css('display','block');
    $("#work .st0").css('fill','#7fb2cc');
});

$("#i-work").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/work.png");
});

$("#war .st0").click(function() {
    $(".st0").css('fill','#f5f5f5');
    $(".imgs img").css('display','none');
    $("#overlay").css('display','block');
    $("#i-war").css('display','block');
    $("#war .st0").css('fill','#7fb2cc');
});

$("#i-war").mouseover(function() {
    $("#overlay").attr("src","assets/question5/overlay/war.png");
});

/* Question 6 */
$("#2014").click(function() {
    $('#img-people #i-algore').attr('src','assets/question6/algore/algore_14.png');
    $('#img-people #i-bankimoon').attr('src','assets/question6/bkm/bkm_14.png');
    $('#img-people #i-obama').attr('src','assets/question6/obama/obama_14.png');
    $('#img-people #i-trump').attr('src','assets/question6/trump/trump_14.png');
    $('#img-people #i-brown').attr('src','assets/question6/brown/brown_14.png');
    $('#img-people #i-clinton').attr('src','assets/question6/clinton/clinton_14.png');
    $('#img-people #i-trudeau').attr('src','assets/question6/trudeau/trudeau_14.png');
    $('#img-people #i-kerry').attr('src','assets/question6/kerry/kerry_14.png');
    $('#img-people #i-dicaprio').attr('src','assets/question6/leo/leo_14.png');
    $('#img-people #i-modi').attr('src','assets/question6/narendra/narendra_14.png');
});

$("#2015").click(function() {
    $('#img-people #i-algore').attr('src','assets/question6/algore/algore_15.png');
    $('#img-people #i-bankimoon').attr('src','assets/question6/bkm/bkm_15.png');
    $('#img-people #i-obama').attr('src','assets/question6/obama/obama_15.png');
    $('#img-people #i-trump').attr('src','assets/question6/trump/trump_15.png');
    $('#img-people #i-brown').attr('src','assets/question6/brown/brown_15.png');
    $('#img-people #i-clinton').attr('src','assets/question6/clinton/clinton_15.png');
    $('#img-people #i-trudeau').attr('src','assets/question6/trudeau/trudeau_15.png');
    $('#img-people #i-kerry').attr('src','assets/question6/kerry/kerry_15.png');
    $('#img-people #i-dicaprio').attr('src','assets/question6/leo/leo_15.png');
    $('#img-people #i-modi').attr('src','assets/question6/narendra/narendra_15.png');
});

$("#2016").click(function() {
    $('#img-people #i-algore').attr('src','assets/question6/algore/algore_16.png');
    $('#img-people #i-bankimoon').attr('src','assets/question6/bkm/bkm_16.png');
    $('#img-people #i-obama').attr('src','assets/question6/obama/obama_16.png');
    $('#img-people #i-trump').attr('src','assets/question6/trump/trump_16.png');
    $('#img-people #i-brown').attr('src','assets/question6/brown/brown_16.png');
    $('#img-people #i-clinton').attr('src','assets/question6/clinton/clinton_16.png');
    $('#img-people #i-trudeau').attr('src','assets/question6/trudeau/trudeau_16.png');
    $('#img-people #i-kerry').attr('src','assets/question6/kerry/kerry_16.png');
    $('#img-people #i-dicaprio').attr('src','assets/question6/leo/leo_16.png');
    $('#img-people #i-modi').attr('src','assets/question6/narendra/narendra_16.png');
});

$("#algore").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-algore').css('display','block');
    $('#img-people #i-algore').attr('src','assets/question6/algore/algore_tutto.png');
    $('#algore .st0').css('fill','#007ca8');
    $('#algore .st2').css('fill','white');
});

$("#bankimoon").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-bankimoon').css('display','block');
    $('#img-people #i-bankimoon').attr('src','assets/question6/bkm/bkm_tutto.png');
    $('#bankimoon .st0').css('fill','#007ca8');
    $('#bankimoon .st2').css('fill','white');
});

$("#obama").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-obama').css('display','block');
    $('#img-people #i-obama').attr('src','assets/question6/obama/obama_tutto.png');
    $('#obama .st0').css('fill','#007ca8');
    $('#obama .st2').css('fill','white');
});

$("#trump").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-trump').css('display','block');
    $('#img-people #i-trump').attr('src','assets/question6/trump/trump_tutto.png');
    $('#trump .st0').css('fill','#007ca8');
    $('#trump .st2').css('fill','white');
});

$("#johnson").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-brown').css('display','block');
    $('#img-people #i-brown').attr('src','assets/question6/brown/brown_tutto.png');
    $('#johnson .st0').css('fill','#007ca8');
    $('#johnson .st2').css('fill','white');
});

$("#clinton").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-clinton').css('display','block');
    $('#img-people #i-clinton').attr('src','assets/question6/clinton/clinton_tutto.png');
    $('#clinton .st0').css('fill','#007ca8');
    $('#clinton .st2').css('fill','white');
});

$("#trudeau").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-trudeau').css('display','block');
    $('#img-people #i-trudeau').attr('src','assets/question6/trudeau/trudeau_tutto.png');
    $('#trudeau .st0').css('fill','#007ca8');
    $('#trudeau .st2').css('fill','white');
});

$("#kerry").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-kerry').css('display','block');
    $('#img-people #i-kerry').attr('src','assets/question6/kerry/kerry_tutto.png');
    $('#kerry .st0').css('fill','#007ca8');
    $('#kerry .st2').css('fill','white');
});

$("#dicaprio").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-dicaprio').css('display','block');
    $('#img-people #i-dicaprio').attr('src','assets/question6/leo/leo_tutto.png');
    $('#dicaprio .st0').css('fill','#007ca8');
    $('#dicaprio .st2').css('fill','white');
});

$("#modi").click(function() {
    $('.people .st0').css('fill','#e0e0e0');
    $('.people .st2').css('fill','black');
    $('#img-people img').css('display','none');
    $('#img-people #i-modi').css('display','block');
    $('#img-people #i-modi').attr('src','assets/question6/narendra/narendra_tutto.png');
    $('#modi .st0').css('fill','#007ca8');
    $('#modi .st2').css('fill','white');
});

/* Question 7 */
$(document).ready(function() {
    $('#actors-2014').css('display','block');
    $('#actors-2015').css('display','none');
    $('#actors-2016').css('display','none');
});

$("#NAMES").click(function() {
    $('#NAMES').css('display','none');
});

$("#COLORS").click(function() {
    $('#NAMES').css('display','block');
});

/* Question 8 */
$(".personal").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.personal').css('background','#007ca8');
    $('.personal').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#personal .st2').css('opacity','1');
    $('#cit-category').text('Personal opinion');
});

$("#personal").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.personal').css('background','#007ca8');
    $('.personal').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#personal .st2').css('opacity','1');
    $('#cit-category').text('Personal opinion');
});

$(".economy").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.economy').css('background','#007ca8');
    $('.economy').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#economy .st2').css('opacity','1');
    $('#cit-category').text('Economy');
});

$("#economy").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.economy').css('background','#007ca8');
    $('.economy').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#economy .st2').css('opacity','1');
    $('#cit-category').text('Economy');
});

$(".work").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.work').css('background','#007ca8');
    $('.work').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#work .st2').css('opacity','1');
    $('#cit-category').text('Work');
});

$("#work").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.work').css('background','#007ca8');
    $('.work').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#work .st2').css('opacity','1');
    $('#cit-category').text('Work');
});

$(".environment").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.environment').css('background','#007ca8');
    $('.environment').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#environment .st2').css('opacity','1');
    $('#cit-category').text('Environment');
});

$("#environment").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.environment').css('background','#007ca8');
    $('.environment').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#environment .st2').css('opacity','1');
    $('#cit-category').text('Environment');
});

$(".agreement").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.agreement').css('background','#007ca8');
    $('.agreement').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#agreements .st2').css('opacity','1');
    $('#cit-category').text('International Agreements');
});

$("#agreements").click(function() {
    $('em').css('background','rgba(0,124,168,0.2)');
    $('em').css('color','inherit');
    $('.agreement').css('background','#007ca8');
    $('.agreement').css('color','white');
    $('.trump-dixit .st2').css('opacity','0.5');
    $('#agreements .st2').css('opacity','1');
    $('#cit-category').text('International Agreements');
});