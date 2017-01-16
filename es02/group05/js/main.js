$(function() {

	//Disable click on text and pass throguh underlying button
	$("g#legenda > g").css("pointer-events","none");

	//Pointer cursor on buttons
	$("g#legenda > path").css("cursor","pointer");



	$("path.st10").on('click',function(){

		$("g#legenda > path").css("fill","#141414");
		$("g#legenda > path").css("opacity","1");
		$("g#legenda > path.st10").css("fill",$("g#legenda > path.st10").css("stroke"));
		$("g#legenda > path.st7").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st25, circle.st25").show();

		$("polyline").hide();
		$("polyline.st23").show();
	});

	$("path.st7").on('click',function(){


		$("g#legenda > path").css("fill","#141414");
		$("g#legenda > path").css("opacity","1");
		$("g#legenda > path.st7").css("fill",$("g#legenda > path.st7").css("stroke"));
		$("g#legenda > path.st7").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st18, circle.st18").show();

		$("polyline").hide();
		$("polyline.st17").show();
	});

	$("path.st8").on('click',function(){


		$("g#legenda > path").css("fill","#141414");
		$("g#legenda > path").css("opacity","1");
		$("g#legenda > path.st8").css("fill",$("g#legenda > path.st8").css("stroke"));
		$("g#legenda > path.st8").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st16, circle.st16").show();

		$("polyline").hide();
		$("polyline.st15").show();
	});

	$("path.st9").on('click',function(){


		$("g#legenda > path").css("fill","#141414");
		$("g#legenda > path").css("opacity","1");
		$("g#legenda > path.st9").css("fill",$("g#legenda > path.st9").css("stroke"));
		$("g#legenda > path.st9").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st20, circle.st20").show();

		$("polyline").hide();
		$("polyline.st19").show();
	});

	$("path.st5").on('click',function(){

		$("g#legenda > path").css("fill","#141414");
		$("g#legenda > path").css("opacity","1");

		$("g#legenda > path.st5").css("fill",$("g#legenda > path.st5").css("stroke"));
		$("g#legenda > path.st5").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st22, circle.st22").show();

		$("polyline").hide();
		$("polyline.st21").show();
	});

	$("path.st6").on('click',function(){

		$("g#legenda > path").css("fill","#141414");
		$("g#legenda > path").css("opacity","1");

		$("ellipse, circle").show();
		
		$("polyline").show();
	});
});





$("circle.catsiti").on("mouseover",function(){
    $("circle.catsiti, text.catsiti").css({ opacity: 0.1 });
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