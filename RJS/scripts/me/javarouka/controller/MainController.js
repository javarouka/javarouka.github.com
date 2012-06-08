define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver",
	"me/javarouka/utils/Logger"
], function(ObjectUtils, ViewResolver, Logger) {
	
	var execute = function(executeParams) {
		
		ViewResolver.resolve("TemplateHTML", {
			name: "Main",
			path: "Main",
			callback: function(res) {
				Logger.info("Main Content Loaded...");
			}
		});
	};
	
	return {
		execute: execute
	};
});