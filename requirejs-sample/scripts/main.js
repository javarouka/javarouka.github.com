require([
    "jquery",
    "me/javarouka/Song"
], function($, ORM) {
	
	var self = this;
	
	var insertNewSong = function(e) {
		
	}
	
	var renderSongList = function(e) {
		var songs = Song.list();
	};
	
	
	
	var navClicked = function(e, nav) {
		var target = $(e.target);
		if(target.is("a")) {
			e.stopPropagation();
			var linkUrl = target.attr("href");
			console.log(linkUrl);
		}
	}
	
	var eventBind = function() {
		
		$("nav").click(function(e) {
			$(e.target).trigger("nav:click", this);
		});
		
		$("nav").bind("nav:click", navClicked);
		
	};
	
	var init = function() {
		eventBind();
	}
	
	init();
	
});