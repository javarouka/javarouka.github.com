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
	
	
	
	var navClicked = function(e, target) {
		if(target.is("a")) {
			e.stopPropagation();
			var linkUrl = target.attr("href");
			console.log(linkUrl);
		}
	}
	
	var eventBind = function() {
		
		$("nav").click(function(e) {
			var $target = $(e.target);
			$(e.target).trigger("nav:click", $target);
		});
		
		$("nav").bind("nav:click", navClicked);
		
	};
	
	var init = function() {
		eventBind();
	}
	
	init();
	
});