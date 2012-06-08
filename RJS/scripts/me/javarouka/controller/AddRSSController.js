define([
    "jquery",
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/storage/Storage",
    "me/javarouka/view/ViewResolver"
], function($, ObjectUtils, Storage, ViewResolver) {
	
	var addRss = function(e) {
		var $feedurl = $("#feedurl");
		console.log($feedurl.val());
	}
	
	var execute = function(executeParams) {
		
		ViewResolver.resolve("TemplateHTML", {
			name: "RSS 추가하기",
			path: "AddRss",
			loadArea: "view-content",
			callback: function(model) {
				var $addBtn = $(".add-rss");
				$addBtn.onclick = addRss;
			}
		});
	};
	
	return {
		execute: execute
	};
	
});