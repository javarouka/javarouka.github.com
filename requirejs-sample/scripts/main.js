require([
    "jquery",
    "me/javarouka/Song"
], function($, ORM) {
	
	var self = this;
	var eventMap = function() {
		
	}
	
	var insertNewSong = function(e) {
		console.log(e);
	};
	
	var renderSongList = function(e) {
		var songs = Song.list();
		console.log(e, songs);
	};
	
	var navClicked = function(e) {
		var $target = $(e.target);
		if($target.is("a")) {
			e.stopPropagation();
			var linkUrl = target.attr("href");
			$target.trigger(("nav:" + linkUrl));
		}
	}
	
	var eventBind = function() {
		
		var $nav = $("nav");
		var $anchorInNav = $("nav");
		
		$nav.click(function(e) {
			$(e.target).trigger("nav:click");
		});
		
		$nav.bind("nav:click", navClicked);
		$anchorInNav.bind("nav:#view-song", renderSongList);
		$anchorInNav.bind("nav:#regist-song", insertNewSong);
		
	};
	
	var init = function() {
		eventBind();
	}
	
	init();
	
});