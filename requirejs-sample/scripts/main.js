require([
    "jquery",						// 제이쿼리 라이브러리 모듈 ($)
    "me/javarouka/Song",			// 노래 모델 모듈 (Song)
    "me/javarouka/InnerHTMLView"	// HTML 삽입 뷰 모듈 (View)
], function($, Song, View) {
	
	// 컨텐트 영역
	var $content = $("article");
	
	// 문서
	var $html = $("html, body");
	
	/**
	 * 실제 이벤트 함수들
	 * 
	 * renderNewSongForm 노래를 추가할 폼을 그린다
	 * renderSongList 노래 리스트를 그린다
	 * addSong 새로운 노래를 추가한다
	 * toggleLyrics 가사 영역을 토글한다
	 */
	var eventSet = {
		renderNewSongForm: function(e) {
			View.renderNewSongForm({
				renderArea: $content
			});
		},
		renderSongList: function(e) {
			var songs = Song.getList();
			View.renderSongList({
				renderArea: $content,
				data: songs
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
		       		} 
		       		else {
		       			songData[this.name] = this.value || '';
		       		}
			});
			Song.add(songData);
			$("nav").trigger("nav:#regist-song");
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
	
	/**
	 * 이벤트 델리게이트 함수들
	 * 
	 * navClicked nav를 클릭시 발생할 이벤트 델리게이터
	 * articleClicked article을 클릭시 발생할 이벤트 델리게이터
	 * hashChaged 해쉬 체인지 이벤트. 페이지 히스토리 기능
	 */
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
		},
		hashChaged: function(e) {
			var hash = window.location.hash;
			$("nav ul li a").trigger(("nav:" + hash));
		}
	}
	
	/**
	 * 이벤트를 바인딩한다.
	 * 
	 * jQuery 커스텀 이벤트와 이벤트 델리게이트를 사용하여 바인딩했다.
	 */
	var eventBind = function() {
		
		var $nav = $("nav");
		var $anchorInNav = $("nav ul li a");
		
		// 폼 기본동작 방지하여 오동작을 막는다
		$("body form").live("submit", function(e) {
			e.preventDefault();
		});
		
		$content.click(function(e) {
			$(e.target).trigger("article:click");
		})
		$nav.click(function(e) {
			$(e.target).trigger("nav:click");
		});
		$(window).bind("hashchange", delegation.hashChaged);
		
		// 커스텀 이벤트 바인딩
		$content.bind("article:click", delegation.articleClicked);
		$nav.bind("nav:click", delegation.navClicked);
		$anchorInNav.bind("nav:#view-song", eventSet.renderSongList);
		$anchorInNav.bind("nav:#regist-song", eventSet.renderNewSongForm);
		
		
		
	};
	
	// 스크립트 로딩이 끝나면 이벤트 바인딩을 시작한다.
	var init = function() {
		$content.hide(600, eventBind);
	};
	
	init();
	
});