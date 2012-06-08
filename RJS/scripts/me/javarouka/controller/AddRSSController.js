define([
    "jquery",
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/storage/Storage",
    "me/javarouka/view/ViewResolver"
], function($, ObjectUtils, Storage, ViewResolver) {
	
	var addRss = function(e) {
		var $feedurl = $("#feedurl");
		var url = $feedurl.val();
		if(!url) {
			alert("주소를 입력해 주세요");
			return;
		}
		jQuery.getFeed({
		   url: url,
		   success: function(feed) {
		      alert(feed.title);
		   }
		});
	}
	
	var execute = function(executeParams) {
		
		ViewResolver.resolve("TemplateHTML", {
			name: "RSS 추가하기",
			path: "AddRss",
			loadArea: "view-content",
			callback: function(model) {
				var $addBtn = $(".add-rss");
				$addBtn.click = addRss;
			}
		});
	};
	
	return {
		execute: execute
	};
	
});