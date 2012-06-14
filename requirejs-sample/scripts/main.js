require([
    "jquery",
    "me/javarouka/Song",
    "me/javarouka/InnerHTMLView"
], function($, Song, View) {
	
	var self = this;
	var $content = $("article");
	var $html = $("html, body");
	
	var insertNewSong = function(e) {
		View.insertNewSong({
			renderArea: $content
		});
	};
	
	var renderSongList = function(e) {
		var songs = Song.getList();
		View.renderSongList({
			renderArea: $content,
			data: songs
		});
	};
	
	var navClicked = function(e) {
		var $target = $(e.target);
		if($target.is("a")) {
			var linkUrl = $target.attr("href");
			$target.trigger(("nav:" + linkUrl));
		}
	};
	
	var addSong = function($target, $form) {
		var song = $form.serialize();
	    var o = {};
	    var a = $form.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    console.log(o);
	}
	
	var toggleLyrics = function(e) {
		var $target = $(e.target);
		var $p = $target.parent().find("p");
		if($p.is(":animated") || $html.is(":animated")) return;
		
		if($p.hasClass("hide")) {
			$p.slideDown(300, function(){
				$html.animate({
					scrollTop: $target.offset().top - 20
				}, 500);
				$p.removeClass("hide");
			});
		}
		else {
			$p.slideUp(300, function(){
				$html.animate({
					scrollTop: $content.offset().top - 20
				}, 500);
				$p.addClass("hide");
			});
		}
	}
	
	
	var articleClicked = function(e) {
		var $target = $(e.target);
		if($target.is("li.song-item h2")) {
			toggleLyrics.apply($target, [e]);
		}
		if($target.is("form.add-form .btn-add-song")) {
			addSong($target, $("form.add-form"));
		}
	}
	
	var eventBind = function() {
		
		$("body form").live("submit", function(e) {
			e.preventDefault();
		});
		
		var $nav = $("nav");
		var $anchorInNav = $("nav ul li a");
		
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