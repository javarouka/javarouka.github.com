define([ 	
	"javarouka/BaseObject",
	"javarouka/Context"
], function(parent, Context) {	

	var version = "0.1.0";

	var syntaxHighlight = function() {		
	}

	var init = function() {
		syntaxHighlight();
		return this;
	};

	return $.extend(parent, {
		version: version,
		init: init
	});

});