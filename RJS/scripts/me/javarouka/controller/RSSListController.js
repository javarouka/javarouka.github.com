define([
    "jquery",
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/storage/Storage",
    "me/javarouka/view/ViewResolver"
], function($, ObjectUtils, Storage, ViewResolver) {
	
	var getRssList = function() {
		return Storage.get("rsslist");
	}
	
	var execute = function(executeParams) {
		
		ViewResolver.resolve("TemplateHTML", {
			name: "RSS 목록",
			path: "RssList",
			callback: function(model) {
				
				var $template = $(".template");
				console.log($template);
				
			}
		});
	};
	
	return {
		execute: execute
	};
	
});