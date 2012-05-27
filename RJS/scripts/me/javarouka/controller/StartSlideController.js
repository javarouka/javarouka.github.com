define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver"
], function(ObjectUtils, ViewResolver) {
	
	var execute = function() {
		
		ViewResolver.resolve("TemplateHTML", {
			name: "Silde",
			path: "content/Slide.html",
			callback: function(res) {},
			data: {}
		});
		
	};
	
	return {
		execute: execute
	};
	
});