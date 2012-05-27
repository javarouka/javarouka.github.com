define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver"
], function(ObjectUtils, ViewResolver) {
	
	var execute = function() {
		
		ViewResolver.resolve("InnerHTML", {
			name: "Slide Start",
			dom: document.getElementById("content"),
			html: "Start 입니다!!!"
		});
		
	};
	
	return {
		execute: execute
	};
	
});