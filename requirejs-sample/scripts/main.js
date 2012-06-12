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
	
	var eventBind = function(callback) {
		
		console.log("event binding...");
		
		$("nav ul li a").click(function(e) {
			e.preventDefault();
			
			var href = $(this).attr("href");
			console.log(href + " hash event execute");
			
			var mapMethod = requestMap[href];
			
			console.log(requestMap[href]);
			
			mapMethod();
		});
		
		callback();
	}
	
	var init = function() {
		eventBind(renderSingerList);
	}
	
	init();
	
});