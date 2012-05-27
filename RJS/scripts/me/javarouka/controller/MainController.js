define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver"
], function(ObjectUtils, ViewResolver) {
	
	var execute = function() {
		
		ViewResolver.resolve("TemplateHTML", {
			name: "Main",
			path: "../content/Main.html",
			data: {}
		});
	};
	
	return {
		execute: execute
	};
});