define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver"
], function(ObjectUtils, ViewResolver) {
	
	var execute = function() {
		
		ViewResolver.resolve("InnerHTML", {
			name: "Oops...",
			dom: document.body,
			html: "Error 입니다!!!"
		});
	};
	
	return {
		execute: execute
	};
});