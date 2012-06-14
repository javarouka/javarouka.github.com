define(function(Storage) {
	
	var renderTemplate = function(model, callback, complete) {
		var $content = model.renderArea;
		
		$content.empty().html(callback(model.data));
		
		if(callback && typeof callback === 'function') {
			callback();
		}
	}
	
	var insertNewSong = function(model, complete) {
		
		renderTemplate(model, function() {
			return	"<form class='add-form'>" +
				"<h1>노래 입력</h1>" +
				"<div>" +
				"	<div>" +
				"		<label>제목</label>" +
				"		<input id='song-title' type='text' name='title' placeholder='제목을 입력하세요' />" +
				"	</div>" +
				"	<div>" +
				"		<label>가수</label>" +
				"		<input id='song-singer' type='text' name='singer' placeholder='가수를 입력하세요' />" +
				"	</div>" +
				"	<div>" +
				"		<label>노래가사</label>" +
				"		<textarea id='song-lyrics' name='lyrics' placeholder='가사를 입력하세요'></textarea>" +
				"	</div>" +
				"	<button class='btn-add-song'>입력하기</button>" +
				"</div>" +
				"</form>";
		}, complete);
	};
	
	var renderSongList = function(model, complete) {
		/*
		var $content = model.renderArea;
		var data = model.data;
		var html = "";
		*/
		renderTemplate(model, function(songs) {
			var html = "<h1>노래 목록</h1>";
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
			return html;
		}, complete);
		
		/*
		$content.empty().html(html);
		
		if(callback && typeof callback === 'function') {
			callback();
		}
		*/
	};
	
	return {
		renderSongList: renderSongList,
		insertNewSong: insertNewSong
	}
	
});