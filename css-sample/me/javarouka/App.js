define([ 	
	"javarouka/BaseObject",
	"javarouka/Context"
], function(parent, Context) {	

	var version = "0.1.0";

	var initializeUI = function() {
		$("dl dd a.apply-button").each(function() {
			var $btn = $(this);
			var text = $btn.parent("span").data("selector");
			$btn.text("Selector : " + text);
		});
	};

	var syntaxHighlight = function() {	
		SyntaxHighlighter.all();
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
		syntaxHighlight();
		eventBinding();
	};

	return $.extend(parent, {
		version: version,
		init: init
	});

});