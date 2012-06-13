require([
    "jquery",
    "me/javarouka/model/Song",
    "me/javarouka/model/Singer",
    "me/javarouka/TemplateView"
], function($, Song, Singer, View) {
	
	var self = this;
	
	var renderRegistSong = function() {
		
		View.render(
			{
				viewName: "",
				loadArea: "article"
			}, 
			function(option) {
				
			}
		);
	};
	
	var renderSingerList = function() {
		
		View.render(
			{
				viewName: "content/view-singer.html",
				loadArea: "article",
				data: Singer.getList()
			}, 
			function(option) {
				
			}
		);
	};
	
	var renderSongList = function() {
		
		View.render(
			{
				viewName: "",
				data: Song.getList()	
			}, 
			function(option) {
				
			}
		);
	};
	
	var requestMap = {
		"#view-singer": renderSingerList,
		"#view-song": renderSongList,
		"#regist-song": renderRegistSong
	};
	
	var eventBind = function(callback) {
		
		console.log("event binding...");
		
		$("nav").click(function(e) {
			var $target = $(e.target);
			if($target.is("a")) {
				var href = $target.attr("href");
				console.log(href);
				console.log(requestMap[href]);
			}
			
		});
		
		callback();
	}
	
	var init = function() {
		eventBind(renderSingerList);
	}
	
	init();
	
});