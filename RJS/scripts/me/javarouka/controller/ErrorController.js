define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver"
], function(ObjectUtils, ViewResolver) {
	
	var execute = function(executeParams) {
		
		ViewResolver.resolve("TemplateHTML", {
			name: "Error",
			path: "Error",
			callback: function(model) {
				
			}
		});
	};
	
	return {
		execute: execute
	};
});