require([
    "jquery",
    "me/javarouka/Song",
    "me/javarouka/InnerHTMLView"
], function($, Song, View) {
	
	var self = this;
	var $content = $("article");
	var $html = $("html, body");
	
	var eventSet = {
		renderNewSongForm: function(e) {
			$content.hide();
			View.renderNewSongForm({
				renderArea: $content
			},
			function(){
				$content.show('fast');
			});
		},
		renderSongList: function(e) {
			$content.hide();
			var songs = Song.getList();
			View.renderSongList({
				renderArea: $content,
				data: songs
			},
			function(){
				$content.show('fast');
			});
		},
		addSong: function($target, $form) {
			var song = $form.serialize();
		    var songData = {};
		    var serialized = $form.serializeArray();
		    $.each(serialized, function() {
		        if (songData[this.name] !== undefined) {
		            if (!songData[this.name].push) {
		            	songData[this.name] = [o[this.name]];
		            }
		            songData[this.name].push(this.value || '');
		        } else {
		        	songData[this.name] = this.value || '';
		        }
		    });
		    Song.add(songData);
		},
		toggleLyrics: function(e) {
			var $target = $(e.target);
			var $p = $target.parent().find("p");
			if($p.is(":animated") || $html.is(":animated")) return;
			
			if($p.hasClass("hide")) {
				$p.slideDown(800, function(){
					$html.animate({
						scrollTop: $target.offset().top - 20
					}, 500);
					$p.removeClass("hide");
				});
			}
			else {
				$p.slideUp(800, function(){
					$html.animate({
						scrollTop: $content.offset().top - 20
					}, 500);
					$p.addClass("hide");
				});
			}
		}
	};
	
	var delegation = {
		navClicked: function(e) {
			var $target = $(e.target);
			if($target.is("a")) {
				var linkUrl = $target.attr("href");
				$target.trigger(("nav:" + linkUrl));
			}
		},
		articleClicked: function(e) {
			var $target = $(e.target);
			if($target.is("li.song-item h2")) {
				eventSet.toggleLyrics.apply($target, [e]);
			}
			if($target.is("form.add-form .btn-add-song")) {
				eventSet.addSong($target, $("form.add-form"));
			}
		}
	}
	
	var eventBind = function() {
		
		var $nav = $("nav");
		var $anchorInNav = $("nav ul li a");
		
		// 폼 기본동작 방지
		$("body form").live("submit", function(e) {
			e.preventDefault();
		});
		
		// 컨텐트 클릭 이벤트 델리게이트
		$content.click(function(e) {
			$(e.target).trigger("article:click");
		})
		$content.bind("article:click", delegation.articleClicked);
		
		// 네비게이션 클릭 이벤트 델리게이트
		$nav.click(function(e) {
			$(e.target).trigger("nav:click");
		});
		
		$nav.bind("nav:click", delegation.navClicked);
		$anchorInNav.bind("nav:#view-song", eventSet.renderSongList);
		$anchorInNav.bind("nav:#regist-song", eventSet.renderNewSongForm);
		
	};
	
	var init = function() {
		$content.hide();
		eventBind();
	};
	
	init();
	
});