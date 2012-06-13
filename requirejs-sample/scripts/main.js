require([
    "jquery",
    "me/javarouka/Song"
], function($, Song) {
	
	var self = this;
	var $content = $("article");
	var $html = $("html, body");
	
	var insertNewSong = function(e) {
		console.log(e);
	};
	
	var renderSongList = function(e) {
		var songs = Song.getList();
		var html = "<h1>노래</h1>";
		if(!songs || songs.length === 0) {
			html += "<p>등록된 노래가 없습니다!!</p>";
		}
		else {
			html += "<ul>";
			for(var i=0,len=songs.length; i < len; i++) {
				html += 
					"<li class='song-item'>" +
					"	<h2>" + songs[i].title + "</h2>" +
					"	<h3>" + songs[i].singer + "</h3>" +
					"	<p class='hide'>" + songs[i].lyrics + "</p>" +
					"</li>";
			}
			html += "</ul>";
		}
		$content.empty().html(html);
	};
	
	var navClicked = function(e) {
		var $target = $(e.target);
		if($target.is("a")) {
			var linkUrl = $target.attr("href");
			$target.trigger(("nav:" + linkUrl));
		}
	};
	
	var articleClicked = function(e) {
		var $target = $(e.target);
		if($target.is("li.song-item h2")) {
			// close All
			$content.find("p").slideUp(300).addClass("hide");
			
			var $p = $target.parent().find("p");
			
			if($p.hasClass("hide")) {
				$p.slideDown(300, function(){
					$html.animate({
						scrollTop: $target.offset().top - 20
					}, 500);
				}).removeClass("hide");
			}
		}
	}
	
	var eventBind = function() {
		
		var $nav = $("nav");
		var $anchorInNav = $("nav");
		
		$content.click(function(e) {
			$(e.target).trigger("article:click");
		})
		$content.bind("article:click", articleClicked);
		
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