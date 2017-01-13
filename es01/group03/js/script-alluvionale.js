$(document).ready(function() {

	var states = d3.selectAll(".st19").nodes();
	var numbers = d3.selectAll(".st29").nodes();
	var dict_numbers_text = {};
	for (var i = 0; i < numbers.length; i++) {
		dict_numbers_text[states[i].innerHTML] = d3.select(numbers[i]);
	}
	var dict_numbers_values = {
		"Austria" 		: ["1057292", "445337", "0", "158910", "0", "0", "0", "0", "309351"],
		"Poland" 		: ["1694341", "737702", "0", "0", "0", "7320", "0", "0", "955882"],
		"Sweden" 		: ["3380946", "1340448", "206837", "176804", "185427", "0", "94884", "1080675", "295811"],
		"England" 		: ["3693760", "0", "1284404", "0", "0", "0", "491950", "0", "1794947"],
		"Italy" 		: ["3842293", "117142", "0", "101802", "0", "0", "0", "0", "3533852"],
		"Germany" 		: ["4144750", "435016", "167930", "417957", "32424", "2560", "627002", "0", "2445604"],
		"Spain" 		: ["4204614", "1824717","0","0","0","0","616590","722441","934868" ],
		"France" 		: ["4555236", "2562501","0","0", "0","5640","119723","525373","1319723"],
		"Norway" 		: ["5004210", "2912818","102981","188897","5421","0","0","453435","1306809" ],
		"Netherlands" 	: ["5884682", "1164626","344373","1027252","138777","0","0","0","3193861" ]
	};
	var dict_license_id = {
		"tot"		: 0,
		"pd"		: 1,
		"by"		: 2,
		"by-sa"		: 3,
		"by-nc"		: 4,
		"by-nd"		: 5,
		"by-nc-sa"	: 6,
		"by-nc-nd"	: 7,
		"rr-fa"		: 8
	}

	var names = ["472", "474", "476", "478", "480", "482", "484", "486"];
	var real_name = {"pd": "472",
					 "by": "474",
					 "by-sa": "476",
					 "by-nc": "478",
					 "by-nd": "480",
					 "by-nc-sa": "482",
					 "by-nc-nd": "484",
					 "rr-fa": "486"
	}

var textbox_x = [];
d3.selectAll(".rect_down").each(function() {
	var x = +d3.select(this).attr("x");
	var w = +d3.select(this).attr("width");
	textbox_x.push(x+w/2);
});
textbox_x.sort()

var dict_order = {
	"Austria" : 2,
	"Poland" : 0,
	"Sweden" : 1,
	"England" : 3,
	"Italy" : 4,
	"Germany" : 5,
	"Spain" : 6,
	"France" : 7,
	"Norway" : 8,
	"Netherlands" : 9
};

d3.selectAll(numbers).each(function () {
	d3.select(this).attr("x", 0);
	var textbox = d3.select(this.parentNode);
	textbox.style("text-anchor", "middle");
	var key = textbox.select(".st19").html();
	var t = textbox.attr("transform").replace("matrix(", "").replace(")", "").split(" ");
	var new_x = textbox_x[dict_order[key]];
	textbox.attr("transform", "translate(" + new_x + "," + t[5] + ")");
});
	
	var mock_name = "XMLID_XXX_";
	var fascioni = {};

	d3.selectAll("[id^='XMLID']").each(function () {
		var fascione = d3.select(this);
		var theId = fascione.attr("id").replace("XMLID_", "").replace("_", "");
		if (names.indexOf(theId) >= 0) fascioni[theId] = fascione;;
	});

	var active = null;
	var buttons = d3.selectAll(".st12");
	buttons.on("click", function() {

		var button 				= d3.select(this);
		var theId 				= d3.select(this.parentNode).attr("id");
		var text_button 		= d3.selectAll(keepOnlyTag(d3.selectAll(keepOnlyTag(this.parentNode.childNodes, "g")).node().childNodes, "path"));

		var same_button 	 	= active == this;
		var different_button 	= active != null && !same_button;

		var button_color 		= same_button ? "white" : "#013B46";
		var text_color 			= !same_button ? "white" : "#013B46";
		var old_button			= active;
		active 					= same_button ? null : this;

		if (different_button) {
			buttons.style("fill", "white");	

			var old_text_button = d3.selectAll(keepOnlyTag(d3.selectAll(keepOnlyTag(old_button.parentNode.childNodes, "g")).node().childNodes, "path"));
			old_text_button.style("fill", "#013B46");

			for (var key in fascioni) {
				var children = d3.selectAll(removeTag(fascioni[key].node().childNodes, "#text"));
				children.transition().duration(500).style("opacity", ((key == real_name[theId]) ? .6 : .1));
			}

		} else {

			for (var key in fascioni) {
				if (key == real_name[theId]) continue;
				var children = d3.selectAll(removeTag(fascioni[key].node().childNodes, "#text"));
				children.transition().duration(500).style("opacity", same_button ? .6 : .1);
			}

		}

		button.style("fill", button_color);
		text_button.style("fill", text_color);


		for (key in dict_numbers_text) {
			dict_numbers_text[key].transition().duration(500).ease(d3.easeExpOut).tween("text", function(d) {
				/*var i = d3.interpolate(oldValue, newValue);
				var txt = text;
				return function(t) {
					te.text(i(t));
				};*/

				var txt = d3.select(this);
				var oldValue = parseInt(txt.html());
				var key = d3.select(this.parentNode).select(".st19").html();
				var newValue = dict_numbers_values[key][dict_license_id[same_button ? "tot" : theId]];
				var generator = function(a, b, txt) {
					return 	a = +a,
							b -= a,
							txt = txt,
							function(t) {
								var new_val = parseInt(a + b * t).toString();
								var s = "";
								for (var i = new_val.length - 1, j = 0; i >= 0; i--, j++) {
									if (j%3 == 0 && j != 0) s = "." + s;
									s = new_val[i] + s;
								}
								txt.text(s);
								return s;
							};
				}

				var interpolator = generator(oldValue, newValue, txt);
				return interpolator;


			});	
		}
				
	});


});

function removeTag(arr, item) {
	var newArr = [];
	for(var i = arr.length; i--;) {
		if(arr[i].nodeName != item) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function keepOnlyTag(arr, item) {
	var newArr = [];
	for(var i = arr.length; i--;) {
		if(arr[i].nodeName == item) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}