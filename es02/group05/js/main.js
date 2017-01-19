
	var connex = {
		'ballotpedia' : ['arkansas','maine','michigan','missouri','montana','nebraska','new_mexico','north_dakota','washington'],
		'blog_tenthamendmentcenter' : ['hawaii','louisiana','missouri','north_carolina','south_dakota'],
		'wikipedia' : ['alaska','california','colorado','delaware','hawaii','iowa','maine','massachusetts','nevada','new_hampshire','north_dakota','south_dakota','utah','wyoming','west_virginia'],
		'extract_suntimes' : ['georgia','hawaii','illinois','kentucky','south_dakota','wisconsin'],
		'hightimes' : ['idaho','new_jersey','oklahoma','vermont','west_virginia'],
		'mic' : ['florida','maryland','mississipi','montana','new_york','rhode_island','south_carolina'],
		'norml' : ['alabama','alaska','delaware','georgia','illinois','indiana','iowa','kansas','kentucky','maryland','michigan','minnesota','mississipi','missouri','nebraska','new_york','new_hampshire','new_jersey','north_carolina','north_dakota','pennsylvania','south_dakota','virginia','washington','west_virginia','wisconsin','wyoming'],
		'patch' : ['maine','new_jersey'],
		'petitions' : ['new_york','new_mexico','north_carolina'],
		'reason' : ['massachusetts','new_jersey','virginia'],
		'statelaws' : ['alabama','arkansas','idaho','indiana','iowa','new_york','new_mexico','north_dakota','oklahoma','rhode_island','utah','virginia','wisconsin'],
		'time' : ['california','vermont'],
		'votesmart' : ['minnesota','wyoming'],
		'wvpublic' : ['virginia','west_virginia'],
		'alternet' : ['california','kansas'],
		'change' : ['connecticut','indiana','oklahoma','south_carolina'],
		'huffingtonpost' : ['california','maryland','rhode_island'],
		'ibtimes' : ['alabama','arizona','colorado','california','delaware','hawaii','michigan','minnesota','nebraska','north_dakota','oregon','rhode_island','south_dakota','texas'],
		'inquisitr' : ['louisiana','maryland','missouri'],
		'leafly' : ['arizona','connecticut','idaho','indiana','maine','maryland','new_jersey','texas','vermont'],
		'marijuanatimes' : ['connecticut','kentucky','oklahoma','west_virginia'],
		'merryjane' : ['arkansas','delaware','michigan','new_hampshire','new_mexico','north_carolina','utah','virginia'],
		'nytimes' : ['arizona','new_york','idaho'],
		'salon' : ['idaho','wyoming'],
		'southerncannabis' : ['alabama','georgia','louisiana','mississipi','tennessee'],
		'thecannabist' : ['alabama','arkansas','delaware','florida','georgia','illinois','iowa','louisiana','michigan','mississipi','missouri','nebraska','new_jersey','new_mexico','ohio','oklahoma','pennsylvania','utah','vermont','wyoming'],
		'thedailychronic' : ['delaware','maine','massachusetts','california','oregon','mississipi','rhode_island','south_dakota','wisconsin','wyoming'],
		'theguardian' : ['california','delaware','massachusetts','nevada','oregon'],
		'theintelligencer' : ['virginia','west_virginia'],
		'weedblog' : ['idaho','indiana','michigan','new_hampshire','south_dakota'],	
		'usatoday' : ['alabama','california','minnesota'],
		'weednews' : ['delaware','idaho'],
		'washington_post' : ['alabama','alaska','california','minnesota','north_dakota','washington'],
		'kvue' : ['texas']
	};

$(function() {

/* question 2 */

	//Disable click on text and pass throguh underlying button
	$("g#legenda text").css("pointer-events","none");

	//Pointer cursor on buttons
	$("g#legenda path").css("cursor","pointer");

	$("path.st4").on('click',function(){

		$("g#legenda path").css("fill","#141414");
		$("g#legenda path").css("opacity","1");
		$("g#legenda path.st4").css("fill",$("g#legenda path.st4").css("stroke"));
		$("g#legenda path.st4").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st15, circle.st15").show();

		$("polyline, line").hide();
		$("g#titolo > line").show();
		$("g#e-government > line").show();
		$("polyline.st26, line.st26").show();

		$("#e-government > text").show();
		$("#e-marijuana > text").hide();
		$("#e-news > text").hide();
		$("#e-political > text").hide();
		$("#e-reference > text").hide();

		$("g#least_x2F_most_connected *").show();
	});

	$("path.st8").on('click',function(){


		$("g#legenda path").css("fill","#141414");
		$("g#legenda path").css("opacity","1");
		$("g#legenda path.st8").css("fill",$("g#legenda path.st8").css("stroke"));
		$("g#legenda path.st8").css("opacity","0.7");

		$("ellipse, circle").hide();
		$("ellipse.st16, circle.st16").show();

		$("polyline, line").hide();
		$("g#titolo > line").show();
		$("g#e-marijuana > line").show();
		$("polyline.st24, line.st24").show();

		$("#e-government > text").hide();
		$("#e-marijuana > text").show();
		$("#e-news > text").hide();
		$("#e-political > text").hide();
		$("#e-reference > text").hide();

		$("g#least_x2F_most_connected *").show();

	});

	$("path.st11").on('click',function(){


		$("g#legenda path").css("fill","#141414");
		$("g#legenda path").css("opacity","1");
		$("g#legenda path.st11").css("fill",$("g#legenda path.st11").css("stroke"));
		$("g#legenda path.st11").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st14, circle.st14").show();

		$("polyline, line").hide();
		$("g#titolo > line").show();
		$("g#e-news > line").show();
		$("polyline.st22, line.st22").show();

		$("#e-news *").animate({up: '250px'});

		$("#e-government > text").hide();
		$("#e-marijuana > text").hide();
		$("#e-news > text").show();
		$("#e-political > text").hide();
		$("#e-reference > text").hide();

		$("g#least_x2F_most_connected *").show();

	});

	$("path.st12").on('click',function(){


		$("g#legenda path").css("fill","#141414");
		$("g#legenda path").css("opacity","1");
		$("g#legenda path.st12").css("fill",$("g#legenda path.st12").css("stroke"));
		$("g#legenda path.st12").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st13, circle.st13").show();

		$("polyline, line").hide();
		$("g#titolo > line").show();
		$("g#e-political > line").show();
		$("polyline.st23, line.st23").show();

		$("#e-government > text").hide();
		$("#e-marijuana > text").hide();
		$("#e-news > text").hide();
		$("#e-political > text").show();
		$("#e-reference > text").hide();

		$("g#least_x2F_most_connected *").show();

	});

	$("path.st9").on('click',function(){

		$("g#legenda path").css("fill","#141414");
		$("g#legenda path").css("opacity","1");
		$("g#legenda path.st9").css("fill",$("g#legenda path.st9").css("stroke"));
		$("g#legenda path.st9").css("opacity","0.8");

		$("ellipse, circle").hide();
		$("ellipse.st17, circle.st17").show();

		$("polyline, line").hide();
		$("g#titolo > line").show();
		$("g#e-reference > line").show();
		$("polyline.st25, line.st25").show();

		$("#e-government > text").hide();
		$("#e-marijuana > text").hide();
		$("#e-news > text").hide();
		$("#e-political > text").hide();
		$("#e-reference > text").show();

		$("g#least_x2F_most_connected *").show();
	});

	$("path.st10").on('click',function(){

		$("g#legenda path").css("fill","#141414");
		$("g#legenda path").css("opacity","1");

		$("ellipse, circle").show();
		
		$("polyline, line").show();

		$("#e-government > text").show();
		$("#e-marijuana > text").show();
		$("#e-news > text").show();
		$("#e-political > text").show();
		$("#e-reference > text").show();

		$("g#least_x2F_most_connected *").show();
	});

	$(".sito *").on('mouseover',function(){

		$("g#fili_siti line, g#fili_siti polyline").css("opacity","0.1");
		$("g#pallini_stati circle,g#pallini_stati ellipse").css("opacity","0.1")
		$("line#"+$(this).attr('id')+", polyline#"+$(this).attr('id')).css("opacity","1").css("stroke","bold");		//mostro tutte linee del sito


		var listaStati = connex[$(this).attr('id')];

		//mostro tutti stati da cui passa il sito
		$.each(listaStati, function( index, stato ) {
		  console.log( index + ": " + stato );
		  $("g#"+ stato+" circle, g#" + stato+" ellipse").css("opacity","1");
		});

	$("#sfondo_elenco").on('mouseout',function(){
		$("g#fili_siti line, g#fili_siti polyline").css("opacity","1");
		$("g#pallini_stati circle,g#pallini_stati ellipse").css("opacity","1")
		});

	});

//question 5

	$("g#muggles-louis_armstrong > g").on('click',function(){

		window.open("https://www.youtube.com/watch?v=qY6Yo6lE-Jg",'_blank');    

	});

/*question 3 mouse over on rectangles shows their words*/

	$("g#medical_drug_use_group text").hide();
	$("g#legal_drug_trade_group text").hide();
	$("g#political_group text").hide();
	$("g#recreational_drug_use_group text").hide();
	$("g#war_on_drugs_group text").hide();
	$("g#activism_group text").hide();
	$("g#freedom_group text").hide();


	$("#rect_medical_marijuana").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});	
	$("#rect_medical_marijuana").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#medical-m-program").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});	

	$("#medical-m-program").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();
	});

	$("#CBD-oil").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#CBD-oil").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#debilitating-medical-conditions").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#debilitating-medical-conditions").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#medical-m-dispensaries").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#medical-m-dispensaries").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#medical-m-card").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#medical-m-card").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#medical-m-patients").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#medical-m-patients").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#medical-m-doctors").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#medical-m-doctors").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#medical_m_raids").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#medical_m_raids").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#public-health").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#public-health").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#compassionate-medical-m").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#compassionate-medical-m").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#pain").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#pain").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#m-therapy").on('mouseover',function(){
		$("g#medical_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#m-therapy").on('mouseout',function(){
		$("g#medical_drug_use_group text").hide();

	});	

	$("#m-possession").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-possession").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});	

	$("#m-industry").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-industry").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

	$("#m-shops").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-shops").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

	$("#m-tax-revenues").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-tax-revenues").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

	$("#m-businesses").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-businesses").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

	$("#m-sales").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-sales").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

	$("#m-paraphernalia").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-paraphernalia").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

	$("#alcohol").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#alcohol").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

	$("#m-bills").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-bills").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

		$("#m-control-commision").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-control-commision").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

		$("#budget").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#budget").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

		$("#legal-m-market").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#legal-m-market").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

		$("#m-social-clubs").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-social-clubs").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

		$("#m-regulation").on('mouseover',function(){
		$("g#legal_drug_trade_group text").hide();
		$(this).next().show();
	});

	$("#m-regulation").on('mouseout',function(){
		$("g#legal_drug_trade_group text").hide();

	});

		$("#voters").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#voters").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#ballot").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#m-ballot").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#petition").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#petition").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#senate").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#senate").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#supreme-court").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#supreme-court").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#signatures").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#signatures").on('mouseout',function(){
		$("g#political_group text").hide();

	});

	$("#referendum").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#referendum").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#state-election").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#state-election").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#supporters").on('mouseover',function(){
		$("g#political_group text").hide();
		$(this).next().show();
	});

	$("#supporters").on('mouseout',function(){
		$("g#political_group text").hide();

	});

		$("#recreational-m").on('mouseover',function(){
		$("g#recreational_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#recreational-m").on('mouseout',function(){
		$("g#recreational_drug_use_group text").hide();

	});

		$("#home-grown-m").on('mouseover',function(){
		$("g#recreational_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#home-grown-m").on('mouseout',function(){
		$("g#recreational_drug_use_group text").hide();

	});

		$("#personal-use-m").on('mouseover',function(){
		$("g#recreational_drug_use_group text").hide();
		$(this).next().show();
	});

	$("#personal-use-m").on('mouseout',function(){
		$("g#recreational_drug_use_group text").hide();

	});

		$("#m-offenses").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#m-offenses").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#m-arrests").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#m-arrests").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});

		$("#police").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#police").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#felony").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#felony").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#imprisonment").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#imprisonment").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#illegal-drugs").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#illegal-drugs").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#death-penalty").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#death-penalty").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#m-trafficking").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#m-trafficking").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#m-conviction").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#m-conviction").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#m-fine").on('mouseover',function(){
		$("g#war_on_drugs_group text").hide();
		$(this).next().show();
	});

	$("#m-fine").on('mouseout',function(){
		$("g#war_on_drugs_group text").hide();

	});
		$("#social-activists").on('mouseover',function(){
		$("g#activism_group text").hide();
		$(this).next().show();
	});

	$("#social-activists").on('mouseout',function(){
		$("g#activism_group text").hide();

	});
		$("#civic-action").on('mouseover',function(){
		$("g#activism_group text").hide();
		$(this).next().show();
	});

	$("#civic-action").on('mouseout',function(){
		$("g#activism_group text").hide();

	});

	$("#grossroots-community").on('mouseover',function(){
		$("g#activism_group text").hide();
		$(this).next().show();
	});

	$("#grossroots-community").on('mouseout',function(){
		$("g#activism_group text").hide();

	});

	$("#freedom").on('mouseover',function(){
		$("g#freedom_group text").hide();
		$("#freedom_words text").show();
	});

	$("#freedom").on('mouseout',function(){
		$("g#freedom_group text").hide();

	});

/*question 5 mouse over on most popular artists chart*/

	$("g.ttt *").on('mouseover',function(){
		$("g#classifica *").not($("g#"+$(this).parent().attr('id')+", g#"+$(this).parent().attr('id')+" *")).fadeTo("650",0.5);
		$("g#"+$(this).parent().attr('id')+", g#"+$(this).parent().attr('id')+" *").fadeTo("650",1);
	});

	$("#rect_classifica").on('mouseout',function(){
		$("g#classifica *").show();

	});


});







	



