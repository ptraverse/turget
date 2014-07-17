$(function() {
	$("#disclaimer").dialog({		
		width: 600,
		position: {			
			my: "bottom",
			at: "bottom",
			of: window
		}
	});
	
	$("form").submit(function(event) {
		$("#crystal_ball").css("display","block");
		var symbol = $("#symbol_input").val();
		console.log(symbol);
		var yqlUrl = getYqlUrl("quote",symbol);			
		$.ajax({
			url: yqlUrl,			
			type: "GET",			
			success: function(json){
				$("#response").html("");
				var LastTradePriceOnly = json.query.results.quote.LastTradePriceOnly;
				var Change = json.query.results.quote.Change;
				var Name = json.query.results.quote.Name;
				$("#response").append("<table>");
				$("#response").append('<tr><td align="left">Latest Stock Price:</td><td>$'+LastTradePriceOnly+"</td></tr>");
				$("#response").append('<tr><td align="left">Change:</td><td>'+Change+"</td></tr><hr>");
				$("#response").append('<tr><td colspan="2" align="center"><i>Prediction For '+Name+'</i></td></tr>');
				var target = makeTarget(LastTradePriceOnly);
				var recommendation = makeRecommendation(LastTradePriceOnly,target);
				var confidence = makeConfidence();				
				$("#response").append('<tr><td align="left">Target:</td><td><span style="font-weight:bold">$'+target+"</span></td></tr>");
				$("#response").append('<tr><td align="left">Recommendation:</td><td>'+recommendation+"</td></tr>");
				$("#response").append('<tr><td align="left">Confidence:</td><td>'+confidence+"</td></tr>");
				$("#response").append("</table>");
			},
			error: function(err){
				alert("error!");
			}
		}).done(function(){
			$("#crystal_ball").css("display","none");
		});			
		event.preventDefault();
	});
});

function makeTarget(currentPrice)
{
	return (currentPrice*(0.5+Math.random())).toFixed(2);
}

function makeRecommendation(currentPrice,target)
{
	if ((currentPrice/target)>1.08) {
		return '<span style="color:red;font-weight:bold;">Sell</span>';
	}
	else if ((currentPrice/target)<0.92)	{
		return '<span style="color:green;font-weight:bold;">Buy</span>';
	}
	else {
		return '<span style="color:black;font-weight:bold;">Hold</span>';
	}
}

function makeConfidence()
{
	conf = Math.random();
	if (conf>0.66) {
		return '<span style="color:green;font-weight:bold">'+conf.toFixed(2)*100+'%</span>';
	}
	else if (conf>0.33) {
		return '<span style="color:orange;font-weight:bold">'+conf.toFixed(2)*100+'%</span>';
	}
	else {
		return '<span style="color:red;font-weight:bold">'+conf.toFixed(2)*100+'%</span>';
	}	
}

function getYqlUrl(table,key)
{
	if (table=="quote") {
		var url = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.quote%20WHERE%20symbol%3D'"+key+"'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
	}
	
	return url;
}