$('g#cyprus').on('mouseover', function() {
    $("g#cyprus").next().css("opacity", "1");
});
$('g#cyprus').on('mouseout', function() {
    $("g#cyprus").next().css("opacity", "0");
});

$('g#ireland').on('mouseover', function() {
    $("g#ireland").next().css("opacity", "1");
});
$('g#ireland').on('mouseout', function() {
    $("g#ireland").next().css("opacity", "0");
});

$('g#hungary').on('mouseover', function() {
    $('g#hungary').next().css("opacity", "1");
});
$('g#hungary').on('mouseout', function() {
    $('g#hungary').next().css("opacity", "0");
});

$('g#malta').on('mouseover', function() {
    $('g#malta').next().css("opacity", "1");
});
$('g#malta').on('mouseout', function() {
    $('g#malta').next().css("opacity", "0");
});

$('g#sweden').on('mouseover', function() {
    $('g#sweden').next().css("opacity", "1");
});
$('g#sweden').on('mouseout', function() {
    $('g#sweden').next().css("opacity", "0");
});

$('g#spain').on('mouseover', function() {
    $('g#spain').next().css("opacity", "1");
});
$('g#spain').on('mouseout', function() {
    $('g#spain').next().css("opacity", "0");
});

$('g#austria').on('mouseover', function() {
    $('g#austria').next().css("opacity", "1");
});
$('g#austria').on('mouseout', function() {
    $('g#austria').next().css("opacity", "0");
});

$('g#norway').on('mouseover', function() {
    $('g#norway').next().css("opacity", "1");
});
$('g#norway').on('mouseout', function() {
    $('g#norway').next().css("opacity", "0");
});

$('g#netherlands').on('mouseover', function() {
    $('g#netherlands').next().css("opacity", "1");
});
$('g#netherlands').on('mouseout', function() {
    $('g#netherlands').next().css("opacity", "0");
});

$('g#france').on('mouseover', function() {
    $('g#france').next().css("opacity", "1");
});
$('g#france').on('mouseout', function() {
    $('g#france').next().css("opacity", "0");
});

$('g#greece').on('mouseover', function() {
    $('g#greece').next().css("opacity", "1");
});
$('g#greece').on('mouseout', function() {
    $('g#greece').next().css("opacity", "0");
});

$('g#slovenia').on('mouseover', function() {
    $('g#slovenia').next().css("opacity", "1");
});
$('g#slovenia').on('mouseout', function() {
    $('g#slovenia').next().css("opacity", "0");
});

$('g#bulgaria').on('mouseover', function() {
    $('g#bulgaria').next().css("opacity", "1");
});
$('g#bulgaria').on('mouseout', function() {
    $('g#bulgaria').next().css("opacity", "0");
});

$('g#denmark').on('mouseover', function() {
    $('g#denmark').next().css("opacity", "1");
});
$('g#denmark').on('mouseout', function() {
    $('g#denmark').next().css("opacity", "0");
});

$('g#latvia').on('mouseover', function() {
    $('g#latvia').next().css("opacity", "1");
});
$('g#latvia').on('mouseout', function() {
    $('g#latvia').next().css("opacity", "0");
});

$('g#croatia').on('mouseover', function() {
    $('g#croatia').next().css("opacity", "1");
});
$('g#croatia').on('mouseout', function() {
    $('g#croatia').next().css("opacity", "0");
});

$('g#luxembourg').on('mouseover', function() {
    $('g#luxembourg').next().css("opacity", "1");
});
$('g#luxembourg').on('mouseout', function() {
    $('g#luxembourg').next().css("opacity", "0");
});

$('g#lithuania').on('mouseover', function() {
    $('g#lithuania').next().css("opacity", "1");
});
$('g#lithuania').on('mouseout', function() {
    $('g#lithuania').next().css("opacity", "0");
});

$('g#germany').on('mouseover', function() {
    $('g#germany').next().css("opacity", "1");
});
$('g#germany').on('mouseout', function() {
    $('g#germany').next().css("opacity", "0");
});

$('g#romania').on('mouseover', function() {
    $('g#romania').next().css("opacity", "1");
});
$('g#romania').on('mouseout', function() {
    $('g#romania').next().css("opacity", "0");
});


$('g#belgium').on('mouseover', function() {
    $('g#belgium').next().css("opacity", "1");
});
$('g#belgium').on('mouseout', function() {
    $('g#belgium').next().css("opacity", "0");
});


$('g#poland').on('mouseover', function() {
    $('g#poland').next().css("opacity", "1");
});
$('g#poland').on('mouseout', function() {
    $('g#poland').next().css("opacity", "0");
});

$('g#finland').on('mouseover', function() {
    $('g#finland').next().css("opacity", "1");
});
$('g#finland').on('mouseout', function() {
    $('g#finland').next().css("opacity", "0");
});

$('g#estonia').on('mouseover', function() {
    $('g#estonia').next().css("opacity", "1");
});
$('g#estonia').on('mouseout', function() {
    $('g#estonia').next().css("opacity", "0");
});

$('g#slovakia').on('mouseover', function() {
    $('g#slovakia').next().css("opacity", "1");
});
$('g#slovakia').on('mouseout', function() {
    $('g#slovakia').next().css("opacity", "0");
});


$('g#czechrepublic').on('mouseover', function() {
    $('g#czechrepublic').next().css("opacity", "1");
});
$('g#czechrepublic').on('mouseout', function() {
    $('g#czechrepublic').next().css("opacity", "0");
});

/* BUMP */

/*herbal cannabis*/

$("path.bumpHCt").on("mouseover",function(){
    $("path.bumpHCt, text.bumpHCt").css({ opacity: 0.1 });
    $(this).css({ opacity: 1 });
    $(this).next().css({opacity: 1});
});

$("path.bumpHCt").on("mouseout",function(){
    $("path.bumpHCt, text.bumpHCt").css({ opacity: 1 });
});

$("text.bumpHCt").on("mouseover",function(){
    $("path.bumpHCt, text.bumpHCt").css({ opacity: 0.1 });
    $(this).css({ opacity: 1 });
    $(this).prev().css({opacity: 1});
});


$("text.bumpHCt").on("mouseout",function(){
    $("path.bumpHCt, text.bumpHCt").css({ opacity: 1 });
});

/*cannabis resin*/

/*
$('g#herbalcannabis #malta_1_').mouseover(function() {
    $('#estonia_1_, #luxembourg_1_, #latvia_1_, #slovakia_1_, finland_1_, norway_1_, czechrepublic, lithuania_1_, slovenia_1_, portugal_1_, denmark_1_, ireland_1_, hungary_1_, cyprus_1_, sweden_1_, poland_1_, romania_1_, austria_2_, spain_1_, croatia_1_, italy_1_, germany_1_, france_1_, bulgaria_1_, netherlands_1_, belgium_1_, greece_1_, uk').css("opacity", "0.5");
});
$('g#herbalcannabis #malta_1_').mouseout(function() {
    $('#estonia_1_, #luxembourg_1_, #latvia_1_, #slovakia_1_, finland_1_, norway_1_, czechrepublic, lithuania_1_, slovenia_1_, portugal_1_, denmark_1_, ireland_1_, hungary_1_, cyprus_1_, sweden_1_, poland_1_, romania_1_, austria_2_, spain_1_, croatia_1_, italy_1_, germany_1_, france_1_, bulgaria_1_, netherlands_1_, belgium_1_, greece_1_, uk').css("opacity", "1");
});



$('g#cannabisresin, #spain_7_').mouseover(function() {
    $('#slovakia_9_, #bulgaria_7_, #slovenia_10_, #poland_9_, #latvia_9_, #czechrepublic_1_, #luxembourg_9_, #cyprus_9_, #hungary_9_, #romania_9_, #malta_9_, #estonia_9_, #croatia_9_, #lithuania_9_, #austria_10_, #finland_9_, #sweden_9_, #norway_9_, #denmark_9_, #germany_9_, #ireland_9_, #netherlands_9_, #belgium_9_, #greece_9_, #italy_9_, #portugal_9_, #united_kingdom_1_, #france_9_').css("opacity", "0.3");
});
$('g#cannabisresin, #spain_7_').mouseout(function() {
    $('#slovakia_9_, #bulgaria_7_, #slovenia_10_, #poland_9_, #latvia_9_, #czechrepublic_1_, #luxembourg_9_, #cyprus_9_, #hungary_9_, #romania_9_, #malta_9_, #estonia_9_, #croatia_9_, #lithuania_9_, #austria_10_, #finland_9_, #sweden_9_, #norway_9_, #denmark_9_, #germany_9_, #ireland_9_, #netherlands_9_, #belgium_9_, #greece_9_, #italy_9_, #portugal_9_, #united_kingdom_1_, #france_9_').css("opacity", "1");
});

/*$('g#malta_1_').mouseover(function(){
        $('g#malta_1_').css("opacity", "10");
    });
$('g#estonia_1_').mouseover(function(){
        $('g#estonia_1_').css("opacity", "10");
    });
$('g#luxemburg_1_').mouseover(function(){
        $('g#luxemburg_1_').css("opacity", "10");
    });
    $('.bumbherbal') .mouseout(function(){
        $('.bumpherbal').css("opacity", "0.1");
    }); */
/*
$('g#herbalcannabis').children(":not('#herbalcannabis:mouseover')").css("opacity", "0");
});
*/
/*

        
    });

    $('#btn-crack').click(function() {
        // $('#seizures-chart g').toggle(0);
        $('.bump').toggle(0);
        $('#seizures-chart #crack').toggle(0);
    }); 





    $('.cannabisresin').click(function() {
        $('#cannabisherbgraph').fadeOut();
        $('#cannabisresingraph').fadeIn();
    });


    // $(".cannabisherb").click(function(){
    //  $(".cannabisherb").removeClass("nonActive");
 //     $(".cannabisherb").addClass("active");
    //  $(".cannabisresin").removeClass("active");
    //  $(".cannabisresin").addClass("nonActive");
    // });
    // $(".cannabisresin").click(function(){
    //  $(".cannabisherb").removeClass("nonActive");
    //  $(".cannabisherb").addClass("active");
    //  $(".cannabisresin").removeClass("active");
 //     $(".cannabisresin").addClass("nonActive");
    // });
*/
