define([
    "jquery",
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/storage/Storage",
    "me/javarouka/view/ViewResolver",
	"me/javarouka/utils/Logger"
], function($, ObjectUtils, Storage, ViewResolver, Logger) {
	
	var addRss = function(e) {
		var $feedurl = $("#feedurl");
		var url = $feedurl.val();
		if(!url) {
			alert("주소를 입력해 주세요");
			return;
		}
		$.getFeed({
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
				Logger.info("Event Binding...");
				var $addBtn = $("button.add-rss");
				
				console.log($addBtn);
				$addBtn.click = addRss;
			}
		});
	};
	
	return {
		execute: execute
	};
	
});