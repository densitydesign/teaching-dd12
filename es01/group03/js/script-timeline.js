var svg = $("#timelinesvglic");

$("[id=time-lic]").mouseenter(function() {

	this.remove()

	var t = $(this).children().filter("[id=time-lic-tip]");	
	$(t).css("display", "block");
	$(t).animate({"opacity": 1}, 300);

	svg.append(this)

});

$("[id=time-lic]").mouseleave(function() {

	var t = $(this).children().filter("[id=time-lic-tip]");
	$(t).animate({"opacity": 0}, 300, function () {
		$(this).css("display", "none");
	});

});

