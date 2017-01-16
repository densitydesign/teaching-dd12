$( document ).ready(function() {

	var svg = $("#diagramma");

	$("[id=fact]").mouseenter(function() {

		var t = $(this).children().filter("[id=text]");	
		$(t).css("display", "block");
		$(t).animate({"opacity": 1}, 300);

		var s = $(this).children().filter("[id=rettp]");	
		$(s).css("display", "block");
		$(s).animate({"opacity": 1}, 300);

	});

	$("[id=fact]").mouseleave(function() {

		var t = $(this).children().filter("[id=text]");
		$(t).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

		var s = $(this).children().filter("[id=rettp]");
		$(s).animate({"opacity": 0}, 300, function () {
			$(this).css("display", "none");
		});

	});


