$( document ).ready(function() {

	var svg = $("#actors-01");

	$("[id=fact]").mouseenter(function() {

		var t = $(this).children().filter("[id=text]");	
		$(t).css("display", "block");
		$(t).animate({"opacity": 1}, 300);

		var s = $(this).children().filter("[id=pallino]");	
		$(s).css("display", "block");
		$(s).animate({"opacity": 1}, 300);

	});

	$("[id=fact]").mouseleave(function() {

		var t = $(this).children().filter("[id=text]");
		$(t).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

		var s = $(this).children().filter("[id=pallino]");
		$(s).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

	});

		var svg = $("#movements-01");

	$("[id=fact]").mouseenter(function() {

		var t = $(this).children().filter("[id=text]");	
		$(t).css("display", "block");
		$(t).animate({"opacity": 1}, 300);

		var s = $(this).children().filter("[id=pallino]");	
		$(s).css("display", "block");
		$(s).animate({"opacity": 1}, 300);

	});

	$("[id=fact]").mouseleave(function() {

		var t = $(this).children().filter("[id=text]");
		$(t).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

		var s = $(this).children().filter("[id=pallino]");
		$(s).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

	});

});

