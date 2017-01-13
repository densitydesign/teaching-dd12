$( document ).ready(function() {

	var svg = $("#svgmap");

	$("[id=map-naz]").mouseenter(function() {

		var t = $(this).children().filter("[id=naz-dati]");	
		$(t).css("display", "block");
		$(t).animate({"opacity": 1}, 300);

		var v = $(this).children().filter("[id=naz-pal]");
		v.stop(true);
		$(v).animate({"fill-opacity": 0, "stroke-width": "1px"}, 300);

		var p = $(this).find("[class=map-0]");
		$(p).css({"fill": "#426870", "transition": ".3s"});

		var map_grafici = $("#map-base-grafici");
		map_grafici.stop(true);
		map_grafici.css("display", "block");
		map_grafici.animate({"opacity": 1}, 300);

	});

	$("[id=map-naz]").mouseleave(function() {

		var t = $(this).children().filter("[id=naz-dati]");
		$(t).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

		var v = $(this).children().filter("[id=naz-pal]");
		v.stop(true);
		$(v).css("display", "block");
		$(v).animate({"fill-opacity": 1, "stroke-width": "0px"}, 300);

		var map_grafici = $("#map-base-grafici");
		map_grafici.stop(true);
		$(map_grafici).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

		var p = $(this).find("[class=map-0]");
		$(p).css({"fill": "#CCC", "transition": ".3s"});

		

	});

});