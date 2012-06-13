define(function(Storage) {
	
	var renderSongList = function(model, callback) {
		
		var $content = model.renderArea;
		var songs = model.data;
		
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
		
		if(callback && typeof callback === 'function') {
			callback();
		}
	};
	
	return {
		renderSongList: renderSongList
	}
	
});