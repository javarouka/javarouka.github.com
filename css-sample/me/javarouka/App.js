define([ 	
	"jquery",
	"javarouka/BaseObject",
	"javarouka/Context",
	"syntaxh"
], function($, parent, Context, syntaxh) {	

	var version = "0.1.0";

	var modifyInterval = 800;
	var G = {
		highlightClass: "highlight",
		$ELEMENTS: {}
	};

	var initializeUI = function() {						
		var $el =  {
			loadingIndicator: $("#ui-loading-indicator"),
			mainSection: $("#content-wrapper section"),
			syntaxing: $("#syntaxing"),
			findContext: $("section .target"),
			controlBar: $(".ctrl-bar"),
			selectorString: $("#selector-string")
		};
		$el.mainSection.hide();

		//$el.syntaxing.text($el.findContext.html());

		$el.loadingIndicator.hide();
		$el.mainSection.fadeIn(1000);

		return $el;
	};

	var doHighlighting = function(selector) {	
		clear();
		try {
			var t = G.$ELEMENTS.findContext.find(selector);
			if(t && t.size() > 0) {
				t.addClass(G.highlightClass);
			}
		}	
		catch(jQueryError) {
			clear();
		}
	}

	var clear = function() {
		G.$ELEMENTS.findContext.find("." + G.highlightClass)
			.removeClass(G.highlightClass);
	};

	var eventBinding = function() {
		$(document.body).on("click", clear);

		G.$ELEMENTS.controlBar.on(
			"keyup",
			G.$ELEMENTS.selectorString,
			function(e) {								
				if(e) {
					e.stopPropagation();
					if(modifyInterval) {
						clearTimeout(modifyInterval);
					}
					modifyInterval = setTimeout(function() {						
						doHighlighting(e.target.value);
					}, modifyInterval);					
				}
			}
		);
	};

	var init = function() {
		G.$ELEMENTS = initializeUI();
		eventBinding();
	};

	return $.extend(parent, {
		version: version,
		init: init
	});

});