define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver"
], function(ObjectUtils, ViewResolver) {
	
	var execute = function() {
		
		ViewResolver.resolve("InnerHTML", {
			name: "Main",
			dom: document.body,
			html: "Main 입니다!!!"
		});
	};
	
	return {
		execute: execute
	};
});