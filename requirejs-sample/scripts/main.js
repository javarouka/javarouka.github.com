require([
    "jquery",
    "me/javarouka/model/Song",
    "me/javarouka/model/Singer",
    "me/javarouka/TemplateView"
], function($, Song, Singer, View) {
	
	var requestMap = {
		"#view-singer": renderRegistSong,
		"#view-song": renderSingerList,
		"#regist-song": renderSongList
	};
	
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
	
	var eventBind = function() {
		$("nav a").click(function(e) {
			e.preventDefault();
			var href = $(this).href;
			var mapMethod = requestMap[href];
			
			mapMethod();
		});
	}
	
	var init = function() {
		eventBind(renderSingerList);
	}
	
});