require([
    "jquery",
    "me/javarouka/Song"
], function($, Song) {
	
	var self = this;
	var $content = $("article");
	var eventMap = function() {
		
	}
	
	var insertNewSong = function(e) {
		console.log(e);
	};
	
	var renderSongList = function(e) {
		var songs = Song.getList();
		var html = "<h1>노래</h1>";
		if(!songs || songs.length === 0) {
			html += "<p>등록된 노래가 없습니다</p>";
		}
		else {
			html += "<ul>";
			for(var i=0,len=songs.length; i < len; i++) {
				html += 
					"<li>" +
					"	<h2>" + songs[i].title + "</h2>" +
					"	<h3>" + songs[i].singer + "</h3>" +
					"	<p>" + songs[i].lyrics + "</p>" +
					"</li>";
			}
			html += "</ul>";
		}
		$content.empty().html(html);
	};
	
	var navClicked = function(e) {
		var $target = $(e.target);
		if($target.is("a")) {
			e.stopPropagation();
			var linkUrl = $target.attr("href");
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