define([ 	
	"javarouka/BaseObject",
	"javarouka/Context",
	"syntaxh"
], function(parent, Context, syntaxh) {	

	var version = "0.1.0";

	var initializeUI = function() {
		$("dl dd a.apply-button").each(function() {
			var $btn = $(this);
			var text = $btn.parent("span").data("selector");
			$btn.text("Selector : " + text);
		});
		syntaxHighlight();
	};

	var eventBinding = function() {
		$("section dl").on("click", "a.apply-button", function(e) {		
			e.preventDefault();	
			var selector = $(e.target).parent("span").data("selector");	
			var $ctx = $(this).parents("dd");			
			$ctx.find(selector).addClass($ctx.prev("dt").attr("id"));
		});
	};

	var init = function() {
		initializeUI();
		eventBinding();
	};

	return $.extend(parent, {
		version: version,
		init: init
	});

});