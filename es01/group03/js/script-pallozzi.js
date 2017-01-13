$( document ).ready(function() {

	var nations = ["Netherlands", "Germany", "France", "Spain", "Italy",
				   "United Kingdom", "Sweden", "Austria", "Poland", "Denmark",
				   "Belgium", "Finland", "Hungary", "Czech Republic", "Greece",
				   "Slovenia", "Estonia", "Ireland", "Portugal", "Lithuania",
				   "Latvia", "Bulgaria", "Croatia", "Luxembourg", "Slovakia",
				   "Romania", "Malta", "Cyprus", "Norway"];

	var svg = $("#pallozzin");

	createAttribute(nations);

	var the_scale = d3.select("#numeri-sotto-pall").selectAll("text");
	the_scale.each(function () {
		var number = d3.select(this);
		if (number.html() != "3.000.000") {
			number.remove();
		} else {
			number.html("2.982.019");
		}
	});
	the_scale = d3.select("#numeri-sotto-pall").select("text");
	the_scale.style("text-anchor", "end");
	the_scale.attr("transform", "translate(813.011,455.9346)");

	var maxR = 0;
	var maxX = 0;
	var minX = 999;
	svg.find(".st9").each(function() {
		var p = $(this);
		var r_value = Math.sqrt(Math.pow(parseFloat(p.attr("r")) / 25, 2)) * 15;
		p.attr("r", r_value);
		p.attr("original_value", r_value);
		var cx = p.attr("cx");
		p.attr("original_cx", cx);
		maxR = Math.max(maxR, parseFloat(p.attr("r")));
		maxX = Math.max(maxX, parseFloat(p.attr("cx")));
		minX = Math.min(minX, parseFloat(p.attr("cx")));

		var text = d3.select(this.parentNode).select("text");
		text.attr("text-anchor", "middle");
		var matrix = text.attr("transform");
		matrix = matrix.replace("matrix(", "").replace(")", "").split(" ");
		var text_y = matrix[5];
		text.attr("y", text_y);
		text.attr("transform", "translate(" + cx + "," + text_y + ")");
		text.attr("original_value", cx);

		var text_number = text.select(".st6").attr("x", 0);

	});

	$(".ui-slider-handle")
		.css({
			"background": "#048089",
			"border": "0px",
			"border-radius": "0px",
			"color": "white"
		});

	var currentTranslation = 0;
	var rangeScale = d3.scaleLinear().domain([0, 100]).range([minX, maxX]);
	var handle2 = $("#custom-handle2");
	$("#sliderExpansion").slider({
		step: 0.1,
		value: 0,
		create: function() {
			handle2.text("Scale");
		},


  		slide: function(event, ui) {
  			var range = maxX - rangeScale(ui.value) + minX;
  			var linearScale = d3.scaleLinear().domain([0, range]).range([0, maxX]);
  			

  			var maxVisible = 0;
  			d3.selectAll("#museo-palla").each(function() {
				var p = d3.select(this);
				var circles = p.selectAll("circle");
				var newCx = linearScale(+circles.attr("original_cx")) + currentTranslation;
				circles.attr("cx", newCx);

				var toHide = (newCx > maxX || newCx < minX - 15) ? "none" : "block"
				d3.select(circles.node().parentNode).style("display", toHide);

				var text = p.selectAll("text");
				var translate = text.attr("transform");
				translate = translate.replace("translate(", "").replace(")", "").split(",");
				translate[0] = linearScale(text.attr("original_value")) + currentTranslation;
				var newTranslate = "translate(" + translate[0] + "," + translate[1] + ")";
				text.attr("transform", newTranslate);

				if (toHide == "block") {
					maxVisible = Math.max(maxVisible, +text.select(".st6").html());
				}

			});
			maxVisible = maxVisible.toString();
			var s = "";
			for (var i = maxVisible.length - 1, j = 0; i >= 0; i--, j++) {
				if (j%3 == 0 && j != 0) s = "." + s;
					s = maxVisible[i] + s;
			}
			the_scale.html(s)

  		}
	});

	var handle = $("#custom-handle");
	var translateScale = d3.scaleLinear().domain([0, 100]).range([-1000, 1000]);
	$("#sliderTranslate").slider({
		step: 0.1,
		value: 50,
		create: function() {
			//handle.text($(this).slider("value") - 50);
			handle.text("Pan");
		},

  		slide: function(event, ui) {
  			var newTranslation = translateScale(ui.value);
  			//handle.text(parseInt(ui.value) - 50);

  			var maxVisible = 0;
  			d3.selectAll("#museo-palla").each(function() {
				var p = d3.select(this);
				var circles = p.selectAll("circle");
				var cx = +circles.attr("cx");
				var newCx = cx - currentTranslation + newTranslation;

				var toHide = (newCx > maxX || newCx < minX - 15) ? "none" : "block"
				d3.select(circles.node().parentNode).style("display", toHide);

				circles.attr("cx", newCx);

				var text = p.selectAll("text");
				var translate = text.attr("transform");
				translate = translate.replace("translate(", "").replace(")", "").split(",");
				translate[0] = +translate[0] + - currentTranslation + newTranslation;
				var newTranslate = "translate(" + translate[0] + "," + translate[1] + ")";
				text.attr("transform", newTranslate);

				if (toHide == "block") {
					maxVisible = Math.max(maxVisible, +text.select(".st6").html());
				}
			});

			currentTranslation = newTranslation;

			maxVisible = maxVisible.toString();
			var s = "";
			for (var i = maxVisible.length - 1, j = 0; i >= 0; i--, j++) {
				if (j%3 == 0 && j != 0) s = "." + s;
					s = maxVisible[i] + s;
			}
			the_scale.html(s)

  		}
	});



	$("[id=museo-palla]").mouseenter(function() {

		this.remove()
		var t = $(this).children().filter("text");	
		$(t).css("display", "block");
		$(t).animate({"opacity": 1}, 100);
		svg.append(this);

	});

	$("[id=museo-palla]").mouseleave(function() {

		var t = $(this).children().filter("text");
		$(t).animate({"opacity": 0}, 50, function () {
			$(this).css("display", "none");
		});

	});

	d3.selectAll("text").on("mouseenter", function() {

		//if (oldTextSelected != "") return;

		var nomeNazione = d3.select(this).html();

		if (nations.indexOf(nomeNazione) < 0) return;
		
		d3.selectAll("#museo-palla").each(function() {
			var nazionePallozzo = d3.select(this).attr("nazione");
			if (nazionePallozzo != nomeNazione) {
				var p = d3.select(this).select(".st9");
				if (p.node()) {

				} else {
					console.log(this)
				}
				if (d3.active(p.node(), "moving")) return;
				p.transition().duration(500).attr("r", 0);
			}
		});
	});

	d3.selectAll("text").on("mouseleave", function() {

		//if (oldTextSelected != "") return;

		var nomeNazione = d3.select(this).html();
		if (nations.indexOf(nomeNazione) < 0) return;
		
		d3.selectAll("#museo-palla").each(function() {
			var nazionePallozzo = d3.select(this).attr("nazione");
			var p = d3.select(this).select(".st9");
			if (d3.active(p.node(), "moving")) return;
			p.transition().duration(250).attr("r", p.attr("original_value"));
		});
	});

});

function createAttribute (nations) {
	for (var i = 0; i < nations.length; i++) {
		var selector = "#mu-" + (i+1).toString();
		$(selector).children().each(function() {
			$(this).attr("nazione", nations[i]);
		});
		$("#mu-30").children().each(function() {
			$(this).attr("nazione", "Norway");
		});
	}
}