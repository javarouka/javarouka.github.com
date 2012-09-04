define([ 	
	"jquery",
	"javarouka/BaseObject",
	"javarouka/Context",
	"syntaxh"
], function($, parent, Context, syntaxh) {	

	var version = "0.1.0";
	var G = {
		highlightClass: "highlight",
		$ELEMENTS: {}
	};

	var initializeUI = function() {		
		syntaxh.highlight();
		G.$ELEMENTS = {
			findContext: $("section .target"),
			controlBar: $(".ctrl-bar"),
			selectorString: $("#selector-string")
		};
	};

	var clear = function() {
		G.$ELEMENTS.findContext.find("." + G.highlightClass)
			.removeClass(G.highlightClass);
		G.$ELEMENTS.selectorString.val("");
	};

	var eventBinding = function() {
		$(document.body).on("click", clear);

		G.$ELEMENTS.controlBar.on(
			"keyup",
			G.$ELEMENTS.selectorString,
			function(e) {
				if(e) {
					e.stopPropagation();					
					var selector = e.target.value;
					var t = G.$ELEMENTS.findContext.find(selector);
					t.addClass(G.highlightClass);
				}
			}
		);
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